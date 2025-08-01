# 🚀 GitHub Pages Configuration Guide

## 📋 Prerequisites

- GitHub account
- Git installed on your computer
- Custom domain (optional)
- VK Software website files

## 🔧 Step-by-Step Setup

### Step 1: Create GitHub Repository

1. **Go to GitHub.com** and sign in
2. **Click "New Repository"** (green button)
3. **Repository Settings:**
   ```
   Repository name: vk-software
   Description: VK Software - Training, Services & Consulting Website
   Visibility: Public (required for free GitHub Pages)
   Initialize: ✅ Add a README file
   ```
4. **Click "Create repository"**

### Step 2: Upload Website Files

#### Option A: Web Interface (Drag & Drop)
1. **Go to your repository** on GitHub
2. **Click "uploading an existing file"**
3. **Drag and drop all files:**
   ```
   ├── index.html
   ├── css/style.css
   ├── js/script.js
   ├── assets/favicon.ico
   ├── assets/portfolio/
   ├── robots.txt
   ├── sitemap.xml
   ├── CNAME
   └── README.md
   ```
4. **Commit changes** with message: "Initial website upload"

#### Option B: Git Commands (Recommended)
```bash
# Clone the repository
git clone https://github.com/yourusername/vk-software.git
cd vk-software

# Copy all website files to this directory
# (Copy index.html, css/, js/, assets/, etc.)

# Add all files
git add .

# Commit files
git commit -m "Add VK Software website files"

# Push to GitHub
git push origin main
```

### Step 3: Enable GitHub Pages

1. **Go to repository Settings** (tab at top)
2. **Scroll down to "Pages"** (left sidebar)
3. **Configure Source:**
   ```
   Source: Deploy from a branch
   Branch: main
   Folder: / (root)
   ```
4. **Click "Save"**
5. **Wait 2-3 minutes** for deployment

### Step 4: Verify Deployment

1. **GitHub will show the URL:**
   ```
   Your site is published at:
   https://yourusername.github.io/vk-software/
   ```
2. **Click the URL** to test your website
3. **Check all functionality:**
   - Navigation works
   - Phone/email links work
   - Responsive design
   - All sections load properly

## 🌐 Custom Domain Configuration

### Step 1: Domain DNS Settings

**Add these DNS records in your domain provider:**

#### For Root Domain (vk-soft.com)
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 3600

Type: A
Name: @
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @
Value: 185.199.111.153
TTL: 3600
```

#### For WWW Subdomain
```
Type: CNAME
Name: www
Value: yourusername.github.io
TTL: 3600
```

### Step 2: Configure Custom Domain in GitHub

1. **Go to repository Settings > Pages**
2. **Custom domain section:**
   ```
   Custom domain: vk-soft.com
   ```
3. **Click "Save"**
4. **Wait for DNS check** (green checkmark)
5. **Enable "Enforce HTTPS"** (recommended)

### Step 3: Update CNAME File

The `CNAME` file should contain:
```
vk-soft.com
```

## 🔒 SSL Certificate (HTTPS)

GitHub Pages automatically provides SSL certificates:

1. **After custom domain is configured**
2. **Wait 24-48 hours** for certificate generation
3. **Enable "Enforce HTTPS"** in Pages settings
4. **Your site will be available at:**
   ```
   https://vk-soft.com
   https://www.vk-soft.com (redirects to main)
   ```

## 📁 Required Files for GitHub Pages

### CNAME File
```
vk-soft.com
```

### .gitignore (Optional)
```
# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# Editor files
*.swp
*.swo
*~

# Logs
*.log
```

### robots.txt (Already included)
```
User-agent: *
Allow: /

# Sitemap
Sitemap: https://vk-soft.com/sitemap.xml

# Disallow unnecessary files
Disallow: /README.md
Disallow: /DEPLOYMENT-CHECKLIST.md
Disallow: /*.md
```

## 🔄 Automatic Deployment

GitHub Pages automatically rebuilds when you:

1. **Push changes to main branch**
2. **Edit files directly on GitHub**
3. **Merge pull requests**

### Update Workflow:
```bash
# Make changes to files
git add .
git commit -m "Update website content"
git push origin main

# GitHub Pages automatically deploys in 2-3 minutes
```

## 🛠️ Troubleshooting

### Common Issues:

#### 1. Site Not Loading
```
Problem: 404 error or blank page
Solution: 
- Check index.html is in root directory
- Verify repository is public
- Wait 5-10 minutes after enabling Pages
```

#### 2. Custom Domain Not Working
```
Problem: Domain shows GitHub 404
Solution:
- Verify DNS records are correct
- Wait 24-48 hours for DNS propagation
- Check CNAME file contains correct domain
```

#### 3. HTTPS Not Available
```
Problem: SSL certificate not working
Solution:
- Wait 24-48 hours after domain setup
- Disable and re-enable custom domain
- Contact GitHub support if persistent
```

#### 4. Images Not Loading
```
Problem: Portfolio images not displaying
Solution:
- Check file paths are correct
- Ensure images are in assets/portfolio/
- Verify image files were uploaded
```

## 📊 GitHub Pages Limits

- **Repository size:** 1 GB maximum
- **Monthly bandwidth:** 100 GB
- **Builds per hour:** 10 builds
- **File size:** 100 MB per file maximum

## ✅ Final Checklist

### Before Going Live:
- [ ] All files uploaded to GitHub
- [ ] GitHub Pages enabled
- [ ] Website loads at github.io URL
- [ ] Custom domain configured (if applicable)
- [ ] DNS records added
- [ ] HTTPS enabled
- [ ] All functionality tested
- [ ] Contact information updated
- [ ] Social media links updated

### After Going Live:
- [ ] Test website on multiple devices
- [ ] Submit to Google Search Console
- [ ] Add Google Analytics (optional)
- [ ] Monitor for any issues
- [ ] Regular content updates

## 🌊 Your VK Software Website is Ready!

Once configured, your website will be available at:
- **GitHub URL:** `https://yourusername.github.io/vk-software/`
- **Custom Domain:** `https://vk-soft.com` (if configured)

**The website will automatically update whenever you push changes to the GitHub repository!**
