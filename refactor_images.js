const fs = require('fs');
let code = fs.readFileSync('src/app/components/Navbar.jsx', 'utf8');

// Add import Next Image if not present
if (!code.includes('import Image from "next/image"')) {
  code = code.replace(
    'import Link from "next/link";',
    'import Link from "next/link";\nimport Image from "next/image";'
  );
}

// Fix missing forward slashes in src
code = code.replace(/src="diqrawhite\.webp"/g, 'src="/diqrawhite.webp"');

// Replace <img> with <Image> using regex
code = code.replace(
  /<img src="(\/diqrablack\.webp)" alt="DIQRA logo" \/>/g,
  '<Image src="$1" alt="DIQRA logo" width={110} height={25} priority />'
);

code = code.replace(
  /<img src="(\/diqrawhite\.webp)" alt="DIQRA logo" \/>/g,
  '<Image src="$1" alt="DIQRA logo" width={110} height={25} priority />'
);

fs.writeFileSync('src/app/components/Navbar.jsx', code);
console.log('Images optimized successfully.');
