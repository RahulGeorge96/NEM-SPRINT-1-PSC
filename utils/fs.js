const fs = require("fs");

const readFile = (filepath) => {
let result = fs.readFileSync(filepath, "utf-8");
return JSON.parse(result);
};

const writeFile = (filepath, content) => {
try {
fs.writeFileSync(filepath, JSON.stringify(content));
return true;
} catch (err) {
return err;

}
};

module. exports = { readFile, writeFile };