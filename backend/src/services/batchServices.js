// LOAD STATIC DB FROM FILE
const fs = require("fs");
const path = require("path");

// Path to db.json
const DB_PATH = path.join(__dirname, "../../db.json");

// Load database once at server start
function loadDB() {
  try {
    const data = fs.readFileSync(DB_PATH, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("❌ Error loading db.json:", err);
    return {};
  }
}

// In-memory database
let STATIC_DB = loadDB();

// List of all widget keys
const AVAILABLE = Object.keys(STATIC_DB);

// Main batch API function
async function getBatchPayload(requested = null) {
  const keys = requested
    ? AVAILABLE.filter((key) => requested.includes(key))
    : AVAILABLE;

  const payload = {};

  for (const key of keys) {
    payload[key] = STATIC_DB[key];
  }

  // Small delay for realism
  await new Promise((r) => setTimeout(r, 20));

  return payload;
}

module.exports = { getBatchPayload };
