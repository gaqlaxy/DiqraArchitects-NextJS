const fs = require('fs');
let code = fs.readFileSync('src/app/components/Navbar.jsx', 'utf8');

// 1. Add AnimatedText component
code = code.replace(
  'const Navbar = () => {',
  `const AnimatedText = ({ children }) => (
  <span className="navbar-animated-inner">
    <span className="navbar-text-original">{children}</span>
    <span className="navbar-text-hover">{children}</span>
  </span>
);

const Navbar = () => {`
);

// 2. Refactor createSlideUpEffect logic
const effectLogicRegex = /let span = element\.querySelector\("span"\);[\s\S]*?const originalSpan/;
code = code.replace(effectLogicRegex, `const span = element.querySelector(".navbar-animated-inner");
    if (!span) return null;

    const originalSpan`);

// 3. Replace simple <span>TEXT</span> with <AnimatedText>TEXT</AnimatedText> inside links/buttons
// We target only spans without classes or specific spans we know. 
// A safer way is to just replace all <span>TEXT</span>
code = code.replace(/<span>(.*?)<\/span>/g, '<AnimatedText>$1</AnimatedText>');

fs.writeFileSync('src/app/components/Navbar.jsx', code);
console.log('Navbar refactored successfully.');
