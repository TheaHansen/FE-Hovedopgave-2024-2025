import { defineConfig, UserConfigExport } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  test: {
    globals: true,
    setupFiles: "src/setupTests.ts",
  },
} as UserConfigExport);
