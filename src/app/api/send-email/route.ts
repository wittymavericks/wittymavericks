import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Ensure the API key is loaded
if (!process.env.RESEND_API_KEY) {
  throw new Error('Missing RESEND_API_KEY environment variable');
}

const resend = new Resend(process.env.RESEND_API_KEY);

// Handle POST request
export async function POST(req: Request) {
  try {
    // Parse JSON from request body
    const { name, email, message } = await req.json();

    // Send the email using Resend
    const data = await resend.emails.send({
      from: 'Witty Mavericks <onboarding@resend.dev>',  // You can change this if domain is verified
      to: ['wittymavericks@gmail.com'],                  // ✅ Your recipient email
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}

This email was sent from the contact form on wittymavericks.com
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Message:</strong></p>
<p>${message}</p>
<hr>
<p><em>This email was sent from the contact form on wittymavericks.com</em></p>
      `,
    });

    // Success response
    return NextResponse.json({ success: true, data });
  } catch (error) {
    // Log and return error
    console.error('❌ Email sending failed:', error);
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
