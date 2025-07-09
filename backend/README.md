# Portfolio Backend API

Backend API untuk portfolio Agi Muhammad Tengku Aqamaddin yang dibangun dengan Node.js dan Express.js.

## 🚀 Fitur

- ✅ RESTful API untuk data portfolio
- ✅ Data personal, skills, projects, dan education
- ✅ Contact form handling
- ✅ Analytics tracking
- ✅ CORS enabled untuk frontend
- ✅ Error handling yang komprehensif
- ✅ Struktur data yang terorganisir

## 📁 Struktur Project

```
backend/
├── server.js          # Entry point aplikasi
├── data.js            # Data portfolio lengkap
├── package.json       # Dependencies dan scripts
├── .env              # Environment variables
├── .gitignore        # File yang diabaikan git
└── README.md         # Dokumentasi ini
```

## 🛠 Instalasi

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Setup environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env sesuai kebutuhan
   ```

3. **Jalankan development server:**
   ```bash
   npm run dev
   ```

4. **Jalankan production server:**
   ```bash
   npm start
   ```

## 📡 API Endpoints

### Base URL: `http://localhost:5000`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | API information |
| GET | `/api/personal` | Personal information |
| GET | `/api/skills` | Skills data |
| GET | `/api/projects` | All projects |
| GET | `/api/projects/:id` | Single project by ID |
| GET | `/api/education` | Education history |
| GET | `/api/experience` | Work experience |
| GET | `/api/certificates` | Certificates |
| GET | `/api/blog` | Blog posts |
| GET | `/api/config` | Site configuration |
| POST | `/api/contact` | Contact form submission |
| POST | `/api/analytics/view` | Page view tracking |

## 📊 Response Format

Semua response menggunakan format JSON standar:

```json
{
  "success": true,
  "data": {...}
}
```

Untuk error:
```json
{
  "success": false,
  "message": "Error description"
}
```

## 📋 Contoh Response

### GET /api/personal
```json
{
  "success": true,
  "data": {
    "name": "Agi Muhammad Tengku Aqamaddin",
    "title": "Front-End Engineer",
    "tagline": "CodeSeed: Growing Into Greatness",
    "bio": "...",
    "contact": {...},
    "about": {...}
  }
}
```

### GET /api/skills
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Vue.js",
      "level": "Mahir",
      "category": "Frontend",
      "icon": "...",
      "experience": "2+ years"
    }
  ]
}
```

### GET /api/projects
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Aplikasi Mental Health Sobat",
      "description": "...",
      "tech": ["React Native", "Firebase"],
      "status": "coming-soon",
      "features": [...],
      "challenges": [...],
      "achievements": [...]
    }
  ]
}
```

## 🔧 Development

### Scripts
- `npm start` - Production server
- `npm run dev` - Development server dengan nodemon
- `npm test` - Run tests (belum diimplementasi)

### Environment Variables
```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

## 🎯 Roadmap

### Phase 1 (Current)
- ✅ Basic API structure
- ✅ Static data serving
- ✅ CORS configuration

### Phase 2 (Next)
- 🔄 Database integration (MongoDB/PostgreSQL)
- 🔄 User authentication
- 🔄 Admin dashboard API
- 🔄 File upload handling

### Phase 3 (Future)
- 📋 Real email sending (SMTP)
- 📋 Analytics dashboard
- 📋 Blog management system
- 📋 Rate limiting
- 📋 Caching with Redis

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Heroku
```bash
# Install Heroku CLI
heroku create portfolio-backend-agi

# Deploy
git push heroku main
```

### Railway
```bash
# Connect to Railway
railway login
railway init
railway up
```

## 🔒 Security

- Environment variables untuk sensitive data
- CORS configuration
- Input validation
- Error handling tanpa expose sensitive info

## 🤝 Contributing

1. Fork repository
2. Buat feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📝 License

MIT License - see LICENSE file for details.

## 👨‍💻 Author

**Agi Muhammad Tengku Aqamaddin**
- Email: tengkuagi@gmail.com
- GitHub: [@ATengkuuu](https://github.com/ATengkuuu)
- Instagram: [@a.tengkuu](https://instagram.com/a.tengkuu)

---

Made with ❤️ using Node.js & Express.js
