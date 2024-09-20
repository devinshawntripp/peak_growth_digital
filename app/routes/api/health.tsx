import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  // You can add any necessary checks here (e.g., database connection)
  return json({ status: "healthy", timestamp: new Date().toISOString() });
};