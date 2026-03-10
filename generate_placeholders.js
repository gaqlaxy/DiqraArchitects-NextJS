const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function generateImages() {
  const categoriesCode = fs.readFileSync(path.join(__dirname, 'src/app/libs/categories.js'), 'utf8');

  const imageRegex = /image:\s*"(\/images\/services\/[^"]+)"/g;
  let match;
  const expectedImages = new Set();
  
  while ((match = imageRegex.exec(categoriesCode)) !== null) {
    expectedImages.add(match[1]);
  }
  
  const servicesDir = path.join(__dirname, 'public/images/services');
  
  if (!fs.existsSync(servicesDir)) {
    fs.mkdirSync(servicesDir, { recursive: true });
  }

  let createdCount = 0;
  
  for (const imagePath of expectedImages) {
    const relativePath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
    const fullPath = path.join(__dirname, 'public', relativePath);
    
    if (!fs.existsSync(fullPath)) {
      const parsedPath = path.parse(fullPath);
      const text = parsedPath.name.replace(/-/g, ' ').toUpperCase();
      
      const svgCode = `<svg width="800" height="600">
        <rect width="800" height="600" fill="#2d3748"/>
        <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="#ffffff" text-anchor="middle" dominant-baseline="middle">
          ${text}
        </text>
        <text x="50%" y="60%" font-family="Arial, sans-serif" font-size="16" fill="#a0aec0" text-anchor="middle">
          Placeholder Image (800x600)
        </text>
      </svg>`;
      
      try {
        await sharp(Buffer.from(svgCode))
          .jpeg({ quality: 80 })
          .toFile(fullPath);
        console.log(`Created: ${fullPath}`);
        createdCount++;
      } catch (err) {
        console.error(`Failed to create ${fullPath}:`, err);
      }
    }
  }
  console.log(`Generated ${createdCount} missing images.`);
}

generateImages();
