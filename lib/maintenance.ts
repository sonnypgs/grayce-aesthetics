const enabledValues = new Set(["1", "true", "yes", "on"]);

export const isMaintenanceMode = enabledValues.has(
  (process.env.MAINTENANCE_MODE || "").trim().toLowerCase()
);
