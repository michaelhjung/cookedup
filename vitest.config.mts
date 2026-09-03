import { defineConfig } from "vitest/config";

export default defineConfig({
  // Resolves the "@lib/..." style aliases from tsconfig.json so tests
  // import modules by the same specifiers the app does.
  resolve: { tsconfigPaths: true },
  test: {
    // Everything under test here is a pure function — no DOM, so no
    // jsdom, no React Testing Library, and nothing to tear down.
    environment: "node",
    include: ["src/**/*.test.ts"],
  },
});
