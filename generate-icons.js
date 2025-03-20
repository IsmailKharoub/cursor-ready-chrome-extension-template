const fs = require('fs');
const path = require('path');

// Create a simple SVG icon with the given size and color
function generateSvgIcon(size, color = '#4285f4') {
  const padding = Math.floor(size * 0.2);
  const innerSize = size - padding * 2;
  
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <rect x="${padding}" y="${padding}" width="${innerSize}" height="${innerSize}" rx="${innerSize * 0.2}" fill="${color}" />
  <text x="${size / 2}" y="${size / 2 + size * 0.1}" font-family="Arial" font-size="${size * 0.4}" font-weight="bold" fill="white" text-anchor="middle">CE</text>
</svg>`;
}

// Ensure the assets directory exists
const assetsDir = path.join(__dirname, 'src', 'assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// Generate icons of different sizes
const iconSizes = [16, 48, 128];

iconSizes.forEach((size) => {
  const iconContent = generateSvgIcon(size);
  const iconPath = path.join(assetsDir, `icon${size}.svg`);
  
  fs.writeFileSync(iconPath, iconContent);
  console.log(`Created icon: ${iconPath}`);
});

console.log('\nIcon generation complete!');
console.log('Note: For production, you should replace these placeholder SVG icons with proper PNG icons.');
console.log('You can convert the SVGs to PNGs using tools like:');
console.log('- Inkscape (open source)');
console.log('- Adobe Illustrator');
console.log('- Online converters (e.g., https://svgtopng.com/)');
console.log('\nIcons should be placed in the src/assets directory with names:');
console.log('- icon16.png');
console.log('- icon48.png');
console.log('- icon128.png'); 