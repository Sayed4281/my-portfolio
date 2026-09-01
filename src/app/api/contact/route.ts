import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Name, email, phone, and message are required fields.' },
        { status: 400 }
      );
    }


    // Configure Nodemailer transporter with Gmail SMTP credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'sayedshahloobpofficial@gmail.com',
        pass: process.env.EMAIL_PASS, // Set your Gmail App Password in .env.local
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO || 'sayedshahloobpofficial@gmail.com',
      replyTo: email,
      subject: `[Portfolio Contact - ${subject || 'General'}] from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nSubject: ${subject || 'N/A'}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #1e293b; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px; margin-top: 0;">New Portfolio Message</h2>
          <p style="margin: 6px 0;"><strong>Sender Name:</strong> ${name}</p>
          <p style="margin: 6px 0;"><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #0284c7;">${email}</a></p>
          <p style="margin: 6px 0;"><strong>Phone Number:</strong> ${phone ? `<a href="tel:${phone}" style="color: #0284c7;">${phone}</a>` : 'Not provided'}</p>
          <p style="margin: 6px 0;"><strong>Inquiry Subject:</strong> ${subject || 'General Inquiry'}</p>
          
          <div style="margin-top: 20px; padding: 16px; bg: #f8fafc; border-left: 4px solid #2563eb; border-radius: 6px; background-color: #f8fafc;">
            <h4 style="margin: 0 0 8px 0; color: #475569; font-size: 13px; text-transform: uppercase;">Message Content:</h4>
            <p style="white-space: pre-wrap; margin: 0; color: #334155; line-height: 1.6;">${message}</p>
          </div>

          <hr style="margin: 24px 0 12px 0; border: none; border-top: 1px solid #e2e8f0;" />
          <p style="font-size: 11px; color: #94a3b8; margin: 0;">Sent directly from your Next.js Portfolio Contact Form.</p>
        </div>
      `,
    };


    if (!process.env.EMAIL_PASS) {
      return NextResponse.json(
        { 
          error: 'Nodemailer configuration error: EMAIL_PASS is missing in .env.local. Please add your Gmail App Password to .env.local to enable email sending.' 
        },
        { status: 500 }
      );
    }

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Message sent successfully via Nodemailer!' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Nodemailer Transporter Error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send message via Nodemailer. Please verify your SMTP / App Password settings.' },
      { status: 500 }
    );
  }
}
