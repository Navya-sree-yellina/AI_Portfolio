import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Initialize Nodemailer for email sending
const createNodemailerTransporter = () => {
  if (process.env.EMAIL_SERVICE === 'gmail') {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // App-specific password for Gmail
      },
    });
  }
  
  // Default SMTP configuration
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// Email template
const createEmailHTML = (data: any) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
        .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #555; margin-bottom: 5px; }
        .value { background: white; padding: 10px; border-radius: 5px; border: 1px solid #e0e0e0; }
        .message { background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #667eea; margin-top: 20px; }
        .footer { text-align: center; margin-top: 20px; color: #888; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2 style="margin: 0;">New Contact Form Submission</h2>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">Portfolio Website Inquiry</p>
        </div>
        <div class="content">
            <div class="field">
                <div class="label">Name:</div>
                <div class="value">${data.name}</div>
            </div>
            <div class="field">
                <div class="label">Email:</div>
                <div class="value">${data.email}</div>
            </div>
            ${data.company ? `
            <div class="field">
                <div class="label">Company:</div>
                <div class="value">${data.company}</div>
            </div>
            ` : ''}
            <div class="field">
                <div class="label">Inquiry Type:</div>
                <div class="value">${data.inquiryType}</div>
            </div>
            ${data.urgency ? `
            <div class="field">
                <div class="label">Urgency:</div>
                <div class="value">${data.urgency}</div>
            </div>
            ` : ''}
            <div class="message">
                <div class="label">Message:</div>
                <p>${data.message.replace(/\n/g, '<br>')}</p>
            </div>
            ${data.technologiesOfInterest && data.technologiesOfInterest.length > 0 ? `
            <div class="field">
                <div class="label">Technologies of Interest:</div>
                <div class="value">${data.technologiesOfInterest.join(', ')}</div>
            </div>
            ` : ''}
        </div>
        <div class="footer">
            <p>This email was sent from your portfolio website contact form.</p>
            <p>Sender IP: ${data.ip || 'Unknown'}</p>
        </div>
    </div>
</body>
</html>
`;

const createEmailText = (data: any) => `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
${data.company ? `Company: ${data.company}` : ''}
Inquiry Type: ${data.inquiryType}
${data.urgency ? `Urgency: ${data.urgency}` : ''}

Message:
${data.message}

${data.technologiesOfInterest && data.technologiesOfInterest.length > 0 ? 
  `Technologies of Interest: ${data.technologiesOfInterest.join(', ')}` : ''}

---
This email was sent from your portfolio website contact form.
`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { name, email, message, inquiryType } = body;
    
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Get client IP for logging
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    body.ip = ip;

    // Check if email configuration exists
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email configuration missing. Please set EMAIL_USER and EMAIL_PASS in .env.local');
      
      // Log the submission to console as fallback
      console.log('=== NEW CONTACT FORM SUBMISSION ===');
      console.log(createEmailText(body));
      console.log('===================================');
      
      return NextResponse.json({
        success: true,
        message: 'Thank you for your message. I\'ll get back to you within 24 hours!',
        warning: 'Email service not configured, but your message has been logged.'
      });
    }

    // Send email notification
    let emailSent = false;
    const emailTo = process.env.CONTACT_EMAIL_TO || 'navyasreechoudhary@gmail.com';
    
    try {
      const transporter = createNodemailerTransporter();
      
      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: emailTo,
        replyTo: email, // Set reply-to as the sender's email
        subject: `New ${inquiryType || 'Contact'} Inquiry from ${name}`,
        text: createEmailText(body),
        html: createEmailHTML(body),
      });
      
      emailSent = true;
      console.log(`Email sent successfully to ${emailTo}`);
      
      // Send auto-reply to the user
      try {
        const autoReplyHTML = `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
                .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
                .button { display: inline-block; padding: 12px 30px; background: #667eea; color: white; text-decoration: none; border-radius: 5px; margin-top: 20px; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h2 style="margin: 0;">Thank You for Reaching Out!</h2>
                </div>
                <div class="content">
                    <p>Hi ${name},</p>
                    <p>Thank you for your interest! I've received your message and will get back to you within 24 hours.</p>
                    <p>In the meantime, feel free to:</p>
                    <ul>
                        <li>Browse my projects to see my work</li>
                        <li>Visit my blog for technical insights</li>
                        <li>Connect on LinkedIn</li>
                    </ul>
                    <p>Looking forward to discussing how I can help with your ${inquiryType === 'recruitment' ? 'opportunity' : inquiryType === 'consultation' ? 'project' : 'inquiry'}!</p>
                    <p>Best regards,<br>Navya Sree Yellina</p>
                </div>
            </div>
        </body>
        </html>
        `;

        await transporter.sendMail({
          from: `"Navya Sree Yellina" <${process.env.EMAIL_USER}>`,
          to: email,
          subject: 'Thank you for your message!',
          html: autoReplyHTML,
        });
        
        console.log(`Auto-reply sent to ${email}`);
      } catch (autoReplyError) {
        console.error('Auto-reply error:', autoReplyError);
        // Continue even if auto-reply fails
      }
      
    } catch (emailError: any) {
      console.error('Email sending error:', emailError);
      
      // Log the submission as fallback
      console.log('=== NEW CONTACT FORM SUBMISSION (Email Failed) ===');
      console.log(createEmailText(body));
      console.log('Error:', emailError.message);
      console.log('=================================================');
      
      return NextResponse.json({
        success: true,
        message: 'Thank you for your message. I\'ll get back to you within 24 hours!',
        warning: 'Email delivery issue, but your message has been recorded.',
        debugInfo: process.env.NODE_ENV === 'development' ? emailError.message : undefined
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message. I\'ll get back to you within 24 hours!',
      emailSent
    });

  } catch (error: any) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to process your request. Please try again.',
        debugInfo: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}