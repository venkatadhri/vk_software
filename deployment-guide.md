# GitHub Pages Deployment Guide for VK Software

## 🚀 Step-by-Step Deployment

### 1. Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click "New repository" or go to [github.com/new](https://github.com/new)
3. Repository name: `vk_software` (or any name you prefer)
4. Description: "Modern responsive website for VK Software"
5. Make it **Public** (required for free GitHub Pages)
6. ✅ Check "Add a README file"
7. Click "Create repository"

### 2. Upload Your Files

#### Option A: Using GitHub Web Interface
1. In your new repository, click "uploading an existing file"
2. Drag and drop all your project files
3. Commit message: "Initial website deployment"
4. Click "Commit changes"

#### Option B: Using Git Commands
```bash
# Clone the repository
git clone https://github.com/yourusername/vk_software.git
cd vk_software

# Copy all your files to this directory
# Then add, commit, and push
git add .
git commit -m "Initial website deployment"
git push origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"

Your site will be available at: `https://yourusername.github.io/vk_software`

### 4. Custom Domain Setup (vk-soft.com)

#### A. Configure DNS Records
In your domain provider's DNS settings, add these records:

```
Type: A
Name: @ (or root/apex)
Value: 185.199.108.153

Type: A
Name: @ (or root/apex)
Value: 185.199.109.153

Type: A
Name: @ (or root/apex)
Value: 185.199.110.153

Type: A
Name: @ (or root/apex)
Value: 185.199.111.153

Type: CNAME
Name: www
Value: yourusername.github.io
```

#### B. Configure GitHub Pages Custom Domain
1. In your repository Settings > Pages
2. Under "Custom domain", enter: `vk-soft.com`
3. ✅ Check "Enforce HTTPS"
4. Click "Save"

The CNAME file is already included in your project.

### 5. Verify Deployment

1. Wait 5-10 minutes for GitHub Pages to build
2. Visit your GitHub Pages URL
3. Check that all sections load correctly
4. Test the contact form
5. Verify responsive design on mobile

### 6. Domain Verification (24-48 hours)

- DNS changes can take up to 48 hours to propagate
- Use [DNS Checker](https://dnschecker.org/) to verify
- GitHub will automatically issue SSL certificate
- Your site will be available at both:
  - `https://vk-soft.com`
  - `https://www.vk-soft.com`

## 🔧 Post-Deployment Configuration

### 1. EmailJS Setup
1. Follow instructions in `emailjs-config.md`
2. Update `js/script.js` with your EmailJS credentials
3. Test the contact form

### 2. Analytics (Optional)
Add Google Analytics to track visitors:

```html
<!-- Add before closing </head> tag in index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 3. Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your domain `vk-soft.com`
3. Verify ownership using DNS method
4. Submit your sitemap: `https://vk-soft.com/sitemap.xml`

## 📊 Performance Optimization

### 1. Image Optimization
- Replace placeholder images with optimized versions
- Use WebP format for better compression
- Recommended sizes:
  - Portfolio images: 600x400px
  - Hero images: 1200x800px
  - Icons: 64x64px

### 2. Content Updates
- Update all placeholder text
- Add real portfolio projects
- Update contact information
- Customize colors and branding

## 🚨 Troubleshooting

### Common Issues:

#### Site Not Loading
- Check if GitHub Pages is enabled
- Verify repository is public
- Wait 10-15 minutes after enabling

#### Custom Domain Not Working
- Verify DNS records are correct
- Check DNS propagation status
- Ensure CNAME file contains only the domain name

#### Contact Form Not Working
- Check EmailJS configuration
- Verify all IDs are updated in JavaScript
- Check browser console for errors

#### Mobile Layout Issues
- Test on actual devices
- Use browser developer tools
- Check CSS media queries

## 📱 Testing Checklist

Before going live, test:

- ✅ All navigation links work
- ✅ Contact form sends emails
- ✅ Responsive design on mobile/tablet
- ✅ All images load correctly
- ✅ Smooth scrolling works
- ✅ Portfolio filter functions
- ✅ Social media links work
- ✅ Page loads quickly (< 3 seconds)

## 🔄 Updates and Maintenance

### Making Changes:
1. Edit files locally or on GitHub
2. Commit and push changes
3. GitHub Pages automatically rebuilds (2-5 minutes)

### Regular Maintenance:
- Update portfolio with new projects
- Keep contact information current
- Monitor site performance
- Update dependencies annually

## 📞 Support

If you encounter issues:
1. Check GitHub Pages status: [githubstatus.com](https://www.githubstatus.com/)
2. Review GitHub Pages documentation
3. Contact your domain provider for DNS issues
4. Open an issue in the repository for code problems

---

🎉 **Congratulations!** Your VK Software website is now live at vk-soft.com
