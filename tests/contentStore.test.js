const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const fs = require('node:fs');
const os = require('node:os');

const { loadContent, saveContent } = require('../server/dataStore');

test('saveContent writes data to the JSON file and loadContent reads it back', () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'portfolio-test-'));
  const tempFile = path.join(tempDir, 'content.json');

  const sample = {
    stats: { projects: 12, clients: 8, workingHours: 3200 },
    projects: [{ name: 'Inventory App', link: 'https://example.com' }],
    upcoming: {
      title: 'AI Dashboard',
      summary: 'Launching soon',
      images: []
    }
  };

  saveContent(sample, tempFile);
  const loaded = loadContent(tempFile);

  assert.deepEqual(loaded, sample);
  fs.rmSync(tempDir, { recursive: true, force: true });
});
