"# URL Shortener with Custom Logger

A modern URL shortener application built with Next.js and React, featuring custom logging middleware and a beautiful red-themed UI.

## 🚀 Features

- **URL Shortening**: Convert long URLs into short, shareable links
- **Custom Short Codes**: Create personalized short codes for your URLs
- **Expiration Management**: Set expiration dates for your shortened URLs
- **Statistics Tracking**: View click counts and usage statistics
- **Custom Logging**: Integrated logging middleware with external API support
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Red Theme**: Beautiful Material-UI design with custom red color palette

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 18.0 or higher)
- **npm** or **yarn** package manager
- **Git** (for cloning the repository)

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/JPKrishna28/22KN1A6171.git
cd 22KN1A6171
```

#### For the URL Shortener Application:
```bash
cd url-shortner
npm install
```

#### For the Logging Middleware:
```bash
cd ../logging-middleware
npm install
```

### 3. Environment Configuration

Create a `.env.local` file in the `url-shortner` directory (optional):
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
```

## 🏃‍♂️ Running the Application

### Start the URL Shortener Application
```bash
cd url-shortner
npm run dev
```

The application will be available at: **http://localhost:3000**

### Development Scripts
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 📁 Project Structure

```
Url-Shortner-With-Custom-Logger/
├── url-shortner/                 # Main Next.js application
│   ├── src/
│   │   ├── app/                  # App router pages
│   │   ├── components/           # React components
│   │   ├── context/              # React context providers
│   │   ├── theme/                # Material-UI theme configuration
│   │   └── utils/                # Utility functions and validators
│   ├── public/                   # Static assets
│   └── package.json
├── logging-middleware/           # Custom logging middleware
│   ├── index.js                  # Main logging module
│   └── package.json
└── README.md
```

## 🎯 How to Use

### 1. Shorten a URL
1. Navigate to **http://localhost:3000**
2. Enter your long URL in the input field
3. (Optional) Set a custom short code
4. (Optional) Set an expiration date
5. Click **"Shorten URL"**
6. Copy your shortened URL!

### 2. View Statistics
- Click on **"Statistics"** in the navigation
- View all your shortened URLs and their click counts
- See expiration status and dates

### 3. Access Shortened URLs
- Use the format: `http://localhost:3000/[shortcode]`
- Example: `http://localhost:3000/abc123`

## 🔧 Configuration

### Logging Middleware
The application includes a custom logging middleware that:
- Validates log parameters (stack, level, package)
- Sends logs to external API with Bearer token authentication
- Handles CORS issues with proxy routing
- Provides fallback logging for development

### Supported Log Levels
- `debug` - Detailed debug information
- `info` - General information
- `warn` - Warning messages
- `error` - Error conditions
- `fatal` - Critical errors

### Supported Packages
**Frontend**: api, component, hook, navigation, page, state, style
**Backend**: cache, controller, cron job, db, domain, handler, repository, route, service
**Both**: auth, config, middleware, utils

## 🎨 Theme Customization

The application uses a custom red theme. To modify colors:
1. Edit `src/theme/redTheme.js`
2. Update CSS variables in `src/app/globals.css`
3. Modify component styles in `src/app/page.module.css`

## 🐛 Troubleshooting

### Common Issues

**Port 3000 already in use:**
```bash
# Kill the process using port 3000
npx kill-port 3000
# Or use a different port
npm run dev -- -p 3001
```

**Module not found errors:**
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**CORS errors with logging:**
- The application includes a proxy route at `/api/logs` to handle CORS issues
- Logs will automatically use the proxy in development mode

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Developer

**Roll No**: 22KN1A6171  
**Name**: Perla Jaswanth Krishna  
**Email**: perlajawanthhkrishna@gmail.com

---

## 🚀 Quick Start Commands

```bash
# Clone and setup
git clone https://github.com/JPKrishna28/22KN1A6171.git
cd 22KN1A6171/url-shortner
npm install
npm run dev
```

Open **http://localhost:3000** and start shortening URLs! 🎉" 
