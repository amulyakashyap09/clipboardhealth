const crypto = require("crypto");
const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

const createKey = (data) => crypto.createHash("sha3-512").update(data).digest("hex");

const createCandidateKeyIfNotExists = (event) => {
  let candidateKey = TRIVIAL_PARTITION_KEY;
  if (event && !event.partitionKey) {
      const data = JSON.stringify(event);
      candidateKey = createKey(data);
  } else if (event && event.partitionKey) {
    candidateKey = typeof event.partitionKey === "string" ? event.partitionKey : event.partitionKey.toString();
  }
  return candidateKey;
}

exports.deterministicPartitionKey = (event) => {
  let candidateKey = createCandidateKeyIfNotExists(event);
  if (candidateKey.length > MAX_PARTITION_KEY_LENGTH) {
    candidateKey = createKey(candidateKey);
  }
  return candidateKey;
};