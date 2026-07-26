const fs = require('node:fs');
const path = require('node:path');

const defaultContent = {
  stats: {
    projects: 12,
    clients: 8,
    workingHours: 3200
  },
  projects: [
    {
      name: 'Inventory Management App',
      link: 'https://example.com'
    }
  ],
  upcoming: {
    title: 'Upcoming Project',
    summary: 'Share your next project idea here.',
    images: []
  }
};

function resolveFile(filePath = path.join(__dirname, 'content.json')) {
  return filePath;
}

function loadContent(filePath) {
  const fullPath = resolveFile(filePath);
  if (!fs.existsSync(fullPath)) {
    saveContent(defaultContent, fullPath);
    return defaultContent;
  }

  const raw = fs.readFileSync(fullPath, 'utf8');
  return JSON.parse(raw);
}

function saveContent(content, filePath) {
  const fullPath = resolveFile(filePath);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(fullPath, JSON.stringify(content, null, 2));
  return content;
}

module.exports = {
  defaultContent,
  loadContent,
  saveContent
};
