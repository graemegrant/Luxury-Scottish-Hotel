import { NextRequest, NextResponse } from 'next/server';
import { hotelConfig } from '@/hotel.config';

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  type?: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();
    const { name, email, phone, type, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_FORM_TO || hotelConfig.contact.email;
    const fromEmail = process.env.CONTACT_FORM_FROM || `noreply@${new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://craigmorehouse.com').hostname}`;

    if (!resendKey) {
      // No Resend key — log and return success so the form doesn't error in dev
      console.log('[contact form] No RESEND_API_KEY set. Would have sent:', { name, email, message });
      return NextResponse.json({ ok: true });
    }

    const html = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1C3A2B;">New Enquiry — ${hotelConfig.name}</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #666; width: 120px;">Name</td><td style="padding: 8px 0;"><strong>${name}</strong></td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
          ${phone ? `<tr><td style="padding: 8px 0; color: #666;">Phone</td><td style="padding: 8px 0;">${phone}</td></tr>` : ''}
          ${type ? `<tr><td style="padding: 8px 0; color: #666;">Type</td><td style="padding: 8px 0;">${type}</td></tr>` : ''}
        </table>
        <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
        <p style="color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
        <p style="color: #999; font-size: 12px;">Sent via the ${hotelConfig.name} website contact form.</p>
      </div>
    `;

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendKey}`,
      },
      body: JSON.stringify({
        from: `${hotelConfig.name} Website <${fromEmail}>`,
        to: [toEmail],
        reply_to: email,
        subject: `New ${type || 'Enquiry'} from ${name} — ${hotelConfig.name}`,
        html,
      }),
    });

    if (!resendRes.ok) {
      const err = await resendRes.text();
      console.error('[contact form] Resend error:', err);
      return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact form] Unexpected error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
