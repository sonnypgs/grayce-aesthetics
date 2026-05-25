import { isEnabled } from "./env";

export const isPreviewGateEnabled = isEnabled(process.env.PREVIEW_GATE);

export const previewPasswordHash = (
  process.env.PREVIEW_PASSWORD_SHA256 || ""
).trim().toLowerCase();

export const isPreviewNoindex =
  isPreviewGateEnabled || isEnabled(process.env.PREVIEW_NOINDEX);
