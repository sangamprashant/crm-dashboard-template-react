import fs from "fs";
import path from "path";

const srcPath = path.resolve("src");
const srcInitPath = path.resolve("src-init");
const srcExamplePath = path.resolve("src-example");

// If src exists, copy it to src-example
if (fs.existsSync(srcPath)) {
  fs.cpSync(srcPath, srcExamplePath, { recursive: true });
  console.log("📦 Created 'src-example' from 'src'");
} else {
  console.log("⚠️ 'src' not found, skipping creation of 'src-example'.");
}

// If src-init exists, copy it to src
if (fs.existsSync(srcInitPath)) {
  fs.cpSync(srcInitPath, srcPath, { recursive: true });
  console.log("✅ Created 'src' from 'src-init'");
} else {
  console.error("❌ 'src-init' not found. Cannot create 'src'.");
}
