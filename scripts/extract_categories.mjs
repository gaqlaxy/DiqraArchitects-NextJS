import { categories } from 'D:/Projects/NextJs/diqra-next/src/app/libs/categories.js';
import fs from 'fs';
import path from 'path';

const outputPath = path.resolve('src/app/data/categories.json');
fs.writeFileSync(outputPath, JSON.stringify(categories, null, 2));
console.log('Categories extracted to:', outputPath);
