const fs = require('fs');
const path = require('path');

const scriptTag = '<script src="/dashboard-console-capture.js"></script>';

function injectScript(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes('dashboard-console-capture.js')) {
    console.log(`Already injected: ${filePath}`);
    return;
  }
  
  if (content.includes('</head>')) {
    content = content.replace('</head>', `  ${scriptTag}\n  </head>`);
    fs.writeFileSync(filePath, content);
    console.log(`Injected: ${filePath}`);
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (file.endsWith('.html')) {
      injectScript(fullPath);
    }
  });
}

const outDir = path.join(process.cwd(), '.next', 'server', 'app');
if (fs.existsSync(outDir)) {
  processDirectory(outDir);
  console.log('Console capture script injection complete');
} else {
  console.log('Build output directory not found');
}