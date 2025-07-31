# VK Software - Modern Web Application

A responsive, modern web application for VK Software company built with the latest web technologies and design trends.

## 🚀 Features

- **Modern Design**: Clean, professional design with gradient backgrounds and smooth animations
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Interactive Elements**: Smooth scrolling, animated counters, portfolio filtering
- **Contact Form**: Integrated email functionality using EmailJS
- **Performance Optimized**: Fast loading with optimized assets and lazy loading
- **SEO Friendly**: Semantic HTML structure with proper meta tags
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with modern standards
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **JavaScript ES6+**: Modern JavaScript with async/await, modules
- **EmailJS**: Email integration for contact form
- **AOS**: Animate On Scroll library
- **Font Awesome**: Icon library
- **Google Fonts**: Inter and Space Grotesk fonts

## 📁 Project Structure

```
vk_software/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   └── script.js          # JavaScript functionality
├── assets/
│   └── portfolio/         # Portfolio images
│       ├── project1.jpg
│       ├── project2.jpg
│       └── project3.jpg
├── CNAME                  # Custom domain configuration
├── emailjs-config.md      # EmailJS setup guide
└── README.md             # This file
```

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/vk_software.git
cd vk_software
```

### 2. Configure Email Integration
1. Follow the instructions in `emailjs-config.md`
2. Update the EmailJS configuration in `js/script.js`

### 3. Add Your Content
1. Replace placeholder images in `assets/portfolio/`
2. Update company information in `index.html`
3. Customize colors and styling in `css/style.css`

### 4. Deploy to GitHub Pages
1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Select "Deploy from a branch" and choose "main"
4. Your site will be available at `https://yourusername.github.io/vk_software`

## 🌐 Custom Domain Setup (vk-soft.com)

### 1. DNS Configuration
Add these DNS records to your domain provider:

```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153

Type: CNAME
Name: www
Value: yourusername.github.io
```

### 2. GitHub Pages Configuration
1. In your repository, go to Settings > Pages
2. Under "Custom domain", enter `vk-soft.com`
3. Check "Enforce HTTPS"
4. The CNAME file is already included in this repository

### 3. Verification
- DNS propagation can take up to 24 hours
- Use tools like [DNS Checker](https://dnschecker.org/) to verify propagation
- GitHub will automatically issue an SSL certificate

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🎨 Customization

### Colors
Update CSS custom properties in `css/style.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #f59e0b;
    --accent-color: #10b981;
    /* ... other colors */
}
```

### Fonts
Current fonts: Inter (body) and Space Grotesk (headings)
To change fonts, update the Google Fonts link in `index.html` and CSS variables.

### Content
- Update company information in `index.html`
- Replace portfolio images in `assets/portfolio/`
- Modify services, about section, and contact details

## 📧 Contact Form Setup

The contact form uses EmailJS for sending emails. Follow these steps:

1. Create an EmailJS account at [emailjs.com](https://www.emailjs.com/)
2. Set up an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Update the configuration in `js/script.js`

Detailed instructions are available in `emailjs-config.md`.

## 🔧 Development

### Local Development
Simply open `index.html` in your browser or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

### Performance Optimization
- Images are lazy-loaded
- CSS and JavaScript are minified for production
- Uses modern CSS features for better performance
- Implements proper caching headers

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you need help with setup or customization:
- Check the documentation files
- Open an issue on GitHub
- Contact: hello@vk-soft.com

## 🚀 Deployment Status

- ✅ GitHub Pages Ready
- ✅ Custom Domain Configured
- ✅ SSL Certificate Ready
- ✅ Mobile Optimized
- ✅ SEO Optimized

---

Built with ❤️ by VK Software
