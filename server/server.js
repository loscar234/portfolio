const express = require('express');
const multer = require('multer');
const path = require('node:path');
const fs = require('node:fs');
const { loadContent, saveContent } = require('./dataStore');

const app = express();
const port = process.env.PORT || 3000;
const contentPath = path.join(__dirname, 'content.json');
const uploadsDir = path.join(__dirname, 'uploads');

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (_req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, `upcoming-${Date.now()}${ext}`);
  }
});

const upload = multer({ storage, limits: { files: 3 } });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..')));

app.get('/api/content', (_req, res) => {
  res.json(loadContent(contentPath));
});

app.post('/api/content', upload.array('images', 3), (req, res) => {
  try {
    const data = loadContent(contentPath);
    const payload = req.body;
    const uploadedFiles = (req.files || []).map(file => `/server/uploads/${path.basename(file.path)}`);

    let parsedProjects = data.projects || [];
    if (typeof payload.projectsList === 'string') {
      try {
        parsedProjects = JSON.parse(payload.projectsList);
      } catch (error) {
        parsedProjects = [];
      }
    }

    const nextContent = {
      ...data,
      stats: {
        projects: Number(payload.projects) || data.stats?.projects || 0,
        clients: Number(payload.clients) || data.stats?.clients || 0,
        workingHours: Number(payload.workingHours) || data.stats?.workingHours || 0
      },
      projects: Array.isArray(parsedProjects)
        ? parsedProjects.map((item, index) => ({
            name: item.name || `Project ${index + 1}`,
            link: item.link || '#'
          }))
        : data.projects || [],
      upcoming: {
        title: payload.upcomingTitle || data.upcoming?.title || 'Upcoming Project',
        summary: payload.upcomingSummary || data.upcoming?.summary || '',
        images: uploadedFiles.length ? uploadedFiles : data.upcoming?.images || []
      }
    };

    saveContent(nextContent, contentPath);
    res.json({ success: true, content: nextContent });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.get('/admin', (_req, res) => {
  res.sendFile(path.join(__dirname, '..', 'admin.html'));
});

app.listen(port, () => {
  console.log(`Portfolio admin server running on http://localhost:${port}`);
});
