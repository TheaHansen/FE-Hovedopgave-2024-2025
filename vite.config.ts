import { defineConfig, UserConfigExport } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  test: {
    globals: true,
    setupFiles: "src/setupTests.ts",
  },
} as UserConfigExport);
