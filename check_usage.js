const fs = require("fs");
const path = require("path");

const uiDir = "d:/code/magic-duels-v2/components/ui";
const rootDir = "d:/code/magic-duels-v2";

const files = fs
  .readdirSync(uiDir)
  .filter((f) => f.endsWith(".tsx") || f.endsWith(".ts"));
const components = files.map((f) => path.parse(f).name);

const usageCount = {};
components.forEach((comp) => {
  usageCount[comp] = 0;
});

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach((f) => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      if (["node_modules", ".next", ".git"].includes(f)) return;
      walkDir(dirPath, callback);
    } else {
      callback(path.join(dir, f));
    }
  });
}

walkDir(rootDir, (filePath) => {
  const ext = path.extname(filePath);
  if (![".tsx", ".ts", ".js", ".jsx"].includes(ext)) return;

  const content = fs.readFileSync(filePath, "utf8");
  const normFilePath = filePath.replace(/\\/g, "/");

  components.forEach((comp) => {
    const selfPath1 = path.join(uiDir, comp + ".tsx").replace(/\\/g, "/");
    const selfPath2 = path.join(uiDir, comp + ".ts").replace(/\\/g, "/");

    if (normFilePath === selfPath1 || normFilePath === selfPath2) return;

    // 1. Check for import paths including dynamic imports
    // Matches: "@/components/ui/button", "../ui/button", "./button"
    const pathRegex = new RegExp(`["\\'].*\\/${comp}["\\']`, "g");
    if (pathRegex.test(content)) {
      usageCount[comp]++;
      return;
    }

    // 2. Special case for use-toast / useToast
    if (comp === "use-toast" && content.includes("useToast")) {
      usageCount[comp]++;
      return;
    }

    // 3. Special case for toaster if it's imported from somewhere else but named similarly
    // (though the pathRegex should have caught it if it's from @/components/ui/toaster)
  });
});

Object.entries(usageCount)
  .sort((a, b) => a[1] - b[1])
  .forEach(([comp, count]) => {
    console.log(`${comp}: ${count}`);
  });
