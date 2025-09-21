import { NextRequest, NextResponse } from 'next/server';

// Email configuration - replace with your actual email service
const RECIPIENT_EMAIL = 'hello@uspdatalabs.com'; // 👈 CHANGE THIS TO YOUR EMAIL
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY; // 👈 ADD TO .env

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, subject, message, recaptchaToken, honeypot } = body;

    // Spam protection - honeypot check
    if (honeypot) {
      return NextResponse.json({ success: false, message: 'Spam detected' }, { status: 400 });
    }

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
    }

    // Verify reCAPTCHA (if enabled)
    if (recaptchaToken && RECAPTCHA_SECRET_KEY) {
      const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      });

      const recaptchaData = await recaptchaResponse.json();
      if (!recaptchaData.success) {
        return NextResponse.json({ success: false, message: 'reCAPTCHA verification failed' }, { status: 400 });
      }
    }

    // Email content
    const emailContent = `
New Contact Form Submission from USP DataLabs Website

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Phone: ${phone || 'Not provided'}
Subject: ${subject}

Message:
${message}

---
This message was sent from the USP DataLabs contact form.
Time: ${new Date().toLocaleString()}
IP: ${request.ip || 'Unknown'}
    `;

    // TODO: Replace this with actual email service (SendGrid, Nodemailer, etc.)
    console.log('📧 EMAIL TO SEND:');
    console.log('To:', RECIPIENT_EMAIL);
    console.log('Subject: New Contact Form Submission - ' + subject);
    console.log('Content:', emailContent);

    // For now, we'll just log the email content
    // In production, integrate with your email service here
    
    return NextResponse.json({ 
      success: true, 
      message: 'Message sent successfully! We\'ll get back to you soon.' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Something went wrong. Please try again later.' 
    }, { status: 500 });
  }
}
