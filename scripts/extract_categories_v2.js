const fs = require('fs');
const path = require('path');

const inputPath = 'D:/Projects/NextJs/diqra-next/src/app/libs/categories.js';
const outputPath = 'D:/Projects/NextJs/diqra-next/src/app/data/categories.json';
const tempPath = 'D:/Projects/NextJs/diqra-next/scripts/temp_categories.cjs';

const contents = fs.readFileSync(inputPath, 'utf8');
const dataStr = contents.substring(contents.indexOf('[')).trim().replace(/;$/, '');

fs.writeFileSync(tempPath, 'module.exports = ' + dataStr);

const categories = require(tempPath);
fs.writeFileSync(outputPath, JSON.stringify(categories, null, 2));
fs.unlinkSync(tempPath);

console.log('Categories successfully extracted to JSON!');
