// backend/index.js
const express = require('express');
const cors = require('cors');
const { personalInfo, education, skills, projects } = require('./data');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Endpoints
app.get('/api/personal', (req, res) => {
  res.json({
    success: true,
    data: personalInfo
  });
});

app.get('/api/education', (req, res) => {
  res.json({
    success: true,
    data: education
  });
});

app.get('/api/skills', (req, res) => {
  res.json({
    success: true,
    data: skills
  });
});

app.get('/api/projects', (req, res) => {
  res.json({
    success: true,
    data: projects
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server backend berjalan di http://localhost:${PORT}`);
});