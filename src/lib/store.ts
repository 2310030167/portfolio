import fs from "fs";
import path from "path";

export type SubmissionStatus = "PENDING" | "APPROVED" | "REJECTED";

export interface SubmissionRecord {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: SubmissionStatus;
  createdAt: string;
  processedAt?: string;
}

// In-memory cache for fast lookups & serverless instances
const memoryStore = new Map<string, SubmissionRecord>();

// Processed tokens cache to strictly prevent replay attacks
const processedNonces = new Set<string>();

const DATA_DIR = path.join(process.cwd(), ".data");
const DATA_FILE = path.join(DATA_DIR, "submissions.json");

function ensureDataFile() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(DATA_FILE)) {
      fs.writeFileSync(DATA_FILE, JSON.stringify({}), "utf-8");
    }
  } catch {
    // In serverless / read-only environments, filesystem operations may fail silently
  }
}

function loadFromFile(): Record<string, SubmissionRecord> {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, "utf-8");
      return JSON.parse(data || "{}");
    }
  } catch {
    // Ignore read error
  }
  return {};
}

function saveToFile(data: Record<string, SubmissionRecord>) {
  try {
    ensureDataFile();
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
  } catch {
    // Ignore write error in serverless environment
  }
}

export async function saveSubmission(record: SubmissionRecord): Promise<void> {
  memoryStore.set(record.id, record);
  try {
    const data = loadFromFile();
    data[record.id] = record;
    saveToFile(data);
  } catch {
    // Fallback to memory
  }
}

export async function getSubmission(id: string): Promise<SubmissionRecord | null> {
  if (memoryStore.has(id)) {
    return memoryStore.get(id)!;
  }
  try {
    const data = loadFromFile();
    if (data[id]) {
      memoryStore.set(id, data[id]);
      return data[id];
    }
  } catch {
    // Ignore error
  }
  return null;
}

export async function markSubmissionProcessed(
  id: string,
  nonce: string,
  action: "APPROVED" | "REJECTED",
  fallbackData?: { name: string; email: string; subject: string }
): Promise<{
  success: boolean;
  alreadyProcessed: boolean;
  status: SubmissionStatus;
}> {
  // Check if nonce was already used
  if (processedNonces.has(nonce)) {
    const existing = await getSubmission(id);
    return {
      success: false,
      alreadyProcessed: true,
      status: existing?.status || "APPROVED",
    };
  }

  let submission = await getSubmission(id);

  if (submission) {
    if (submission.status !== "PENDING") {
      return {
        success: false,
        alreadyProcessed: true,
        status: submission.status,
      };
    }
    submission.status = action;
    submission.processedAt = new Date().toISOString();
  } else {
    // Reconstruct record from fallback data in stateless environments
    submission = {
      id,
      name: fallbackData?.name || "Visitor",
      email: fallbackData?.email || "",
      subject: fallbackData?.subject || "Portfolio Inquiry",
      message: "",
      status: action,
      createdAt: new Date().toISOString(),
      processedAt: new Date().toISOString(),
    };
  }

  processedNonces.add(nonce);
  await saveSubmission(submission);

  return {
    success: true,
    alreadyProcessed: false,
    status: action,
  };
}
