import fs from "fs";
import path from "path";

const srcPath = path.resolve("src");
const srcInitPath = path.resolve("src-init");
const srcExamplePath = path.resolve("src-example");

// If src exists, rename it to src-example
if (fs.existsSync(srcPath)) {
  fs.renameSync(srcPath, srcExamplePath);
  console.log("📦 Renamed 'src' → 'src-example'");
} else {
  console.log("⚠️ 'src' not found, skipping rename to 'src-example'.");
}

// If src-init exists, rename it to src
if (fs.existsSync(srcInitPath)) {
  fs.renameSync(srcInitPath, srcPath);
  console.log("✅ Renamed 'src-init' → 'src'");
} else {
  console.error("❌ 'src-init' not found. Cannot restore original source.");
}
