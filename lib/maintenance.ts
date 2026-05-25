import { isEnabled } from "./env";

export const isMaintenanceMode = isEnabled(process.env.MAINTENANCE_MODE);
