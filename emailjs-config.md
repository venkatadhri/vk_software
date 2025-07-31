# EmailJS Configuration Guide

## Setup Instructions

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

### 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Inquiry from {{from_name}} - VK Software Website

Hello,

You have received a new inquiry from your website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service Interested In: {{service}}

Message:
{{message}}

---
This email was sent from the VK Software contact form.
```

4. Save the template and note down your **Template ID**

### 4. Get User ID
1. Go to "Account" in your EmailJS dashboard
2. Find your **User ID** (also called Public Key)

### 5. Update JavaScript Configuration
In the `js/script.js` file, replace the following placeholders:

```javascript
// Line 4: Replace with your User ID
emailjs.init("YOUR_EMAILJS_USER_ID");

// Line 135-136: Replace with your Service ID and Template ID
const response = await emailjs.send(
    'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
    'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
    templateParams
);
```

### 6. Update Email Destination
In the `js/script.js` file, line 127, update the destination email:

```javascript
to_email: 'hello@vk-soft.com' // Replace with your actual email
```

## Alternative Email Solutions

If you prefer not to use EmailJS, you can use these alternatives:

### 1. Formspree
- Go to [Formspree.io](https://formspree.io/)
- Create a form endpoint
- Update the form action in HTML

### 2. Netlify Forms (if hosting on Netlify)
- Add `netlify` attribute to the form
- Add `data-netlify="true"` to the form tag

### 3. Custom Backend
- Create a simple Node.js/PHP backend
- Use services like Nodemailer or PHPMailer
- Deploy to services like Vercel, Netlify Functions, or traditional hosting

## Testing
1. Fill out the contact form on your website
2. Check your email for the inquiry
3. Verify all form fields are being sent correctly

## Troubleshooting
- Check browser console for any JavaScript errors
- Verify all IDs are correctly replaced
- Ensure your email service is properly configured
- Check EmailJS dashboard for delivery status
