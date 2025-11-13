# Email Setup Guide for Portfolio Contact Form

This guide will help you set up EmailJS to enable the contact form to send emails to you and confirmation emails to users.

## 🚀 Quick Setup Steps

### 1. Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

### 2. Set Up Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (e.g., `service_abc123`)

### 3. Create Email Templates

#### Template 1: Contact Form (Messages sent to you)
1. Go to "Email Templates" and click "Create New Template"
2. Template Name: "Contact Form"
3. Use this template:

```html
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio website
```

4. Note down the **Template ID** (e.g., `template_contact123`)

#### Template 2: Confirmation Email (Sent to users)
1. Create another template
2. Template Name: "Confirmation Email"
3. Use this template:

```html
Subject: Thank you for your message!

Hi {{to_name}},

Thank you for reaching out! I've received your message and will get back to you soon.

Your message: "{{reply_message}}"

Best regards,
{{from_name}}

---
This is an automated response from the portfolio website.
```

4. Note down the **Template ID** (e.g., `template_confirm123`)

### 4. Get Public Key
1. Go to "Account" in EmailJS dashboard
2. Find your **Public Key** (e.g., `user_abc123xyz`)

### 5. Update Configuration
In `src/components/Contact.js`, replace these values:

```javascript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with Contact Template ID
const confirmationTemplateId = 'YOUR_CONFIRMATION_TEMPLATE_ID'; // Replace with Confirmation Template ID
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key
```

## 📧 Template Variables Reference

### Contact Template (sent to you):
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{message}}` - The message content

### Confirmation Template (sent to user):
- `{{to_name}}` - User's name
- `{{from_name}}` - Your name (Shrihari J)
- `{{reply_message}}` - Confirmation message

## 🔧 Testing

1. After updating the configuration, start your development server:
   ```bash
   npm start
   ```

2. Navigate to the contact section and test the form
3. Check your email for the contact message
4. Check the sender's email for the confirmation

## 🚨 Troubleshooting

### Common Issues:
1. **"Service ID not found"** - Double-check your Service ID
2. **"Template not found"** - Verify Template IDs are correct
3. **"Invalid public key"** - Ensure Public Key is properly set
4. **Emails not sending** - Check EmailJS dashboard for error logs

### Free Plan Limits:
- 200 emails per month
- EmailJS branding in emails
- Upgrade for more features and higher limits

## 🔒 Security Notes

- Never commit your actual EmailJS credentials to version control
- Consider using environment variables for production:
  ```javascript
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  ```

## 📱 Alternative Options

If you prefer other email services:
- **Formspree**: Simple form handling
- **Netlify Forms**: If hosting on Netlify
- **Backend API**: For more control (Node.js + Nodemailer)

---

**Need Help?** Check the [EmailJS Documentation](https://www.emailjs.com/docs/) or contact support.