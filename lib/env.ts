const enabledValues = new Set(["1", "true", "yes", "on"]);

export function isEnabled(value: string | undefined) {
  return enabledValues.has((value || "").trim().toLowerCase());
}
