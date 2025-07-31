# Local Development Guide

## 🚀 Quick Start Commands

### Option 1: Python HTTP Server (Recommended)
```bash
# Navigate to your project directory
cd /Users/venkatkk/Documents/augment-projects/vk_software

# Start Python HTTP server (Python 3)
python3 -m http.server 8000

# Or if you have Python 2
python -m SimpleHTTPServer 8000

# Open in browser
open http://localhost:8000
```

### Option 2: Node.js HTTP Server
```bash
# Install a simple HTTP server globally
npm install -g http-server

# Navigate to project directory
cd /Users/venkatkk/Documents/augment-projects/vk_software

# Start server
http-server -p 8000

# Open in browser
open http://localhost:8000
```

### Option 3: PHP Built-in Server
```bash
# Navigate to project directory
cd /Users/venkatkk/Documents/augment-projects/vk_software

# Start PHP server
php -S localhost:8000

# Open in browser
open http://localhost:8000
```

### Option 4: Live Server (VS Code Extension)
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 🧪 Testing Commands

### 1. Check File Structure
```bash
# List all files and directories
find . -type f -name "*.html" -o -name "*.css" -o -name "*.js" | head -20

# Check if all required files exist
ls -la index.html css/style.css js/script.js
```

### 2. Validate HTML
```bash
# Install HTML validator (if you have Node.js)
npm install -g html-validate

# Validate HTML
html-validate index.html
```

### 3. Check CSS Syntax
```bash
# Install CSS linter
npm install -g stylelint stylelint-config-standard

# Create .stylelintrc.json
echo '{"extends": "stylelint-config-standard"}' > .stylelintrc.json

# Lint CSS
stylelint css/style.css
```

### 4. Test JavaScript
```bash
# Install ESLint
npm install -g eslint

# Initialize ESLint config
eslint --init

# Lint JavaScript
eslint js/script.js
```

## 📱 Mobile Testing

### 1. Test on Different Screen Sizes
```bash
# Open Chrome DevTools and test these sizes:
# Mobile: 375x667 (iPhone)
# Tablet: 768x1024 (iPad)
# Desktop: 1920x1080
```

### 2. Network Simulation
```bash
# In Chrome DevTools:
# 1. Open Network tab
# 2. Select "Slow 3G" to test loading
# 3. Check performance
```

## 🔍 Performance Testing

### 1. Lighthouse Audit
```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run Lighthouse audit
lighthouse http://localhost:8000 --output html --output-path ./lighthouse-report.html

# Open report
open lighthouse-report.html
```

### 2. Bundle Size Analysis
```bash
# Check file sizes
du -h css/style.css js/script.js index.html

# Check total project size
du -sh .
```

## 🐛 Debugging Commands

### 1. Check Console Errors
```bash
# Open browser console (F12) and look for:
# - JavaScript errors
# - Network failures
# - CSS warnings
```

### 2. Test Contact Form Locally
```bash
# Note: EmailJS won't work on localhost without HTTPS
# You can test form validation but not email sending
# Use browser console to check form submission
```

### 3. Check Network Requests
```bash
# In browser DevTools Network tab, verify:
# - All CSS/JS files load (200 status)
# - No 404 errors
# - External resources (fonts, icons) load
```

## 🔧 Development Workflow

### 1. Make Changes and Test
```bash
# 1. Edit files in your preferred editor
# 2. Save changes
# 3. Refresh browser (Cmd+R / Ctrl+R)
# 4. Check browser console for errors
```

### 2. Test Responsive Design
```bash
# Chrome DevTools:
# 1. Press F12
# 2. Click device toggle (Cmd+Shift+M)
# 3. Test different devices
# 4. Check landscape/portrait modes
```

### 3. Performance Optimization
```bash
# Check image sizes
file assets/portfolio/*.jpg

# Optimize images (if you have ImageMagick)
mogrify -resize 600x400 -quality 85 assets/portfolio/*.jpg
```

## 📊 Monitoring Commands

### 1. Watch for File Changes
```bash
# Install nodemon for auto-refresh
npm install -g nodemon

# Watch files and restart server
nodemon --exec "python3 -m http.server 8000" --watch . --ext html,css,js
```

### 2. Check Accessibility
```bash
# Install axe-cli
npm install -g @axe-core/cli

# Run accessibility audit
axe http://localhost:8000
```

## 🚀 Quick Test Checklist

Run these commands to verify everything works:

```bash
# 1. Start local server
python3 -m http.server 8000 &

# 2. Check if server is running
curl -I http://localhost:8000

# 3. Test main page loads
curl -s http://localhost:8000 | grep -i "VK Software"

# 4. Check CSS loads
curl -I http://localhost:8000/css/style.css

# 5. Check JavaScript loads
curl -I http://localhost:8000/js/script.js

# 6. Stop server
pkill -f "python3 -m http.server"
```

## 🌐 Browser Testing

### Open in Multiple Browsers
```bash
# macOS
open -a "Google Chrome" http://localhost:8000
open -a "Firefox" http://localhost:8000
open -a "Safari" http://localhost:8000

# Windows (PowerShell)
Start-Process chrome http://localhost:8000
Start-Process firefox http://localhost:8000

# Linux
google-chrome http://localhost:8000 &
firefox http://localhost:8000 &
```

## 📱 Mobile Device Testing

### 1. Test on Real Devices
```bash
# Find your local IP address
ifconfig | grep "inet " | grep -v 127.0.0.1

# Access from mobile device using your IP
# Example: http://192.168.1.100:8000
```

### 2. QR Code for Easy Access
```bash
# Install qrcode generator
npm install -g qrcode-terminal

# Generate QR code for your local server
qrcode-terminal "http://$(ifconfig | grep "inet " | grep -v 127.0.0.1 | awk '{print $2}' | head -1):8000"
```

## 🔍 Troubleshooting

### Common Issues:
```bash
# Port already in use
lsof -ti:8000 | xargs kill -9

# Permission denied
sudo python3 -m http.server 8000

# Files not found
ls -la index.html  # Check if file exists
pwd  # Check current directory
```

## 🎯 Ready to Test!

1. **Start server**: `python3 -m http.server 8000`
2. **Open browser**: `http://localhost:8000`
3. **Test features**: Navigation, forms, responsive design
4. **Check console**: F12 for any errors
5. **Test mobile**: Use DevTools device mode

Your VK Software website should now be running locally! 🚀
