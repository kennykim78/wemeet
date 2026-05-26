import { execSync } from "node:child_process";

function getStagedFiles() {
  const output = execSync("git diff --name-only --cached", { encoding: "utf8" });
  return output
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((p) => p.replace(/\\/g, "/"));
}

function isCssTarget(path) {
  return /^css\/[^/]+\.css$/i.test(path) && !path.endsWith(".css.map");
}

function toScssPath(cssPath) {
  return cssPath.replace(/^css\//i, "scss/").replace(/\.css$/i, ".scss");
}

function main() {
  const stagedFiles = getStagedFiles();
  const stagedSet = new Set(stagedFiles);

  const changedCssFiles = stagedFiles.filter(isCssTarget);
  if (changedCssFiles.length === 0) {
    process.exit(0);
  }

  const missingSources = [];
  for (const cssFile of changedCssFiles) {
    const scssFile = toScssPath(cssFile);
    if (!stagedSet.has(scssFile)) {
      missingSources.push({ cssFile, scssFile });
    }
  }

  if (missingSources.length > 0) {
    console.error("\n[SCSS Guard] CSS changes detected without matching SCSS source changes:\n");
    for (const pair of missingSources) {
      console.error(`- ${pair.cssFile} -> missing staged source: ${pair.scssFile}`);
    }
    console.error("\nFix:");
    console.error("1) Edit the SCSS source file(s) under scss/");
    console.error("2) Rebuild CSS with: npm run build:css");
    console.error("3) Stage both SCSS and CSS files\n");
    process.exit(1);
  }

  process.exit(0);
}

main();
