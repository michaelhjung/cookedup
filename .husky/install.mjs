// Skip Husky install in production and CI
if (process.env.NODE_ENV === "production" || process.env.CI === "true") {
  process.exit(0); // Skip husky install silently
}

const husky = (await import("husky")).default;
console.info(husky());
