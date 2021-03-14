import config from "config";

export function initConfig() {
  if (!config.get("db")) {
    throw new Error("FATAL ERROR: db is not defined.");
  }

  if (!config.get("env")) {
    throw new Error("FATAL ERROR: NODE_ENV is not defined.");
  }
}
