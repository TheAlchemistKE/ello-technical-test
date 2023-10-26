import fs from "fs";
import path from "path";

const dataFolder = path.resolve(__dirname);

function loadSampleData() {
  const files = fs.readdirSync(dataFolder);

  // Filter the files to keep only .json files
  const jsonFiles = files.filter(
    (file) => path.extname(file).toLowerCase() === ".json",
  );

  const books = [];
  let id = 0;

  for (const jsonFile of jsonFiles) {
    const filePath = path.join(dataFolder, jsonFile);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const bookData = JSON.parse(fileContents);
    books.push({ id, ...bookData });
    id += 1;
  }

  return books;
}

const bookData = loadSampleData();

export { bookData };
