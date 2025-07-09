const express = require('express');
const cors = require('cors');
const data = require('./data');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic route
app.get('/', (req, res) => {
  res.json({ 
    message: '🚀 Portfolio Backend API is running!',
    version: '1.0.0',
    author: 'Agi Muhammad Tengku Aqamaddin',
    endpoints: {
      personalInfo: '/api/personal',
      skills: '/api/skills',
      projects: '/api/projects',
      education: '/api/education',
      experience: '/api/experience',
      certificates: '/api/certificates',
      blog: '/api/blog',
      config: '/api/config'
    }
  });
});

// API Routes
app.get('/api/personal', (req, res) => {
  res.json(data.getPersonalInfo());
});

app.get('/api/skills', (req, res) => {
  res.json(data.getSkills());
});

app.get('/api/projects', (req, res) => {
  res.json(data.getProjects());
});

app.get('/api/projects/:id', (req, res) => {
  const projectId = parseInt(req.params.id);
  const project = data.projects.find(p => p.id === projectId);
  
  if (!project) {
    return res.status(404).json({
      success: false,
      message: 'Project not found'
    });
  }
  
  res.json({
    success: true,
    data: project
  });
});

app.get('/api/education', (req, res) => {
  res.json(data.getEducation());
});

app.get('/api/experience', (req, res) => {
  res.json(data.getExperience());
});

app.get('/api/certificates', (req, res) => {
  res.json(data.getCertificates());
});

app.get('/api/blog', (req, res) => {
  res.json(data.getBlogPosts());
});

app.get('/api/config', (req, res) => {
  res.json(data.getSiteConfig());
});

// Contact form endpoint (placeholder - akan menggunakan Formspree untuk sekarang)
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  // Basic validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required'
    });
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid email format'
    });
  }
  
  // For now, just log the message (will implement email sending later)
  console.log('📧 New contact message:', {
    name,
    email,
    subject,
    message,
    timestamp: new Date().toISOString()
  });
  
  res.json({
    success: true,
    message: 'Message received successfully! (Using Formspree for actual sending)'
  });
});

// Analytics endpoint (placeholder)
app.post('/api/analytics/view', (req, res) => {
  const { page, userAgent, timestamp } = req.body;
  
  // Log page view (will implement proper analytics later)
  console.log('📊 Page view:', {
    page: page || 'unknown',
    userAgent: userAgent || req.get('User-Agent'),
    timestamp: timestamp || new Date().toISOString(),
    ip: req.ip
  });
  
  res.json({
    success: true,
    message: 'Page view recorded'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('❌ Server Error:', err.stack);
  res.status(500).json({ 
    success: false,
    message: 'Something went wrong!' 
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ 
    success: false,
    message: 'Route not found',
    availableEndpoints: [
      'GET /',
      'GET /api/personal',
      'GET /api/skills',
      'GET /api/projects',
      'GET /api/projects/:id',
      'GET /api/education',
      'GET /api/experience',
      'GET /api/certificates',
      'GET /api/blog',
      'GET /api/config',
      'POST /api/contact',
      'POST /api/analytics/view'
    ]
  });
});

app.listen(PORT, () => {
  console.log('🚀 ================================');
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📱 API available at http://localhost:${PORT}`);
  console.log('🚀 ================================');
  console.log('📋 Available endpoints:');
  console.log('   GET  / - API Info');
  console.log('   GET  /api/personal - Personal Information');
  console.log('   GET  /api/skills - Skills Data');
  console.log('   GET  /api/projects - Projects Data');
  console.log('   GET  /api/projects/:id - Single Project');
  console.log('   GET  /api/education - Education History');
  console.log('   GET  /api/experience - Work Experience');
  console.log('   GET  /api/certificates - Certificates');
  console.log('   GET  /api/blog - Blog Posts');
  console.log('   GET  /api/config - Site Configuration');
  console.log('   POST /api/contact - Contact Form');
  console.log('   POST /api/analytics/view - Page Views');
  console.log('🚀 ================================');
});

module.exports = app;
