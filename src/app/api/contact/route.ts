import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, school, grade, message } = body;

  try {
    // 1. Send email to IvyCounsel admin
    const { error: adminError } = await resend.emails.send({
      from: `IvyCounsel <${process.env.RESEND_FROM_EMAIL}>`,
      to: process.env.RESEND_TO_EMAIL!,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f5f5f5; padding: 20px 0;">
          <tr><td align="center">
            <table cellpadding="0" cellspacing="0" border="0" width="600" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <tr><td style="background-color: #2c3e50; padding: 40px 30px; border-radius: 8px 8px 0 0; text-align:center;">
                <h1 style="margin: 0; color: #ffffff;">IvyCounsel</h1>
                <p style="margin: 10px 0 0; color: #ecf0f1;">New Contact Form Submission</p>
              </td></tr>
              <tr><td style="padding: 40px 30px;">
                <h2 style="color: #2c3e50;">Contact Details</h2>
                ${[
                  { label: "Name", value: name },
                  {
                    label: "Email",
                    value: `<a href="mailto:${email}" style="color:#3498db;">${email}</a>`,
                  },
                  {
                    label: "Phone",
                    value: phone
                      ? `<a href="tel:${phone}" style="color:#3498db;">${phone}</a>`
                      : "Not provided",
                  },
                  { label: "School", value: school || "Not provided" },
                  { label: "Grade", value: grade || "Not provided" },
                  { label: "Message", value: message.replace(/\n/g, "<br/>") },
                ]
                  .map(
                    ({ label, value }) => `
                    <div style="margin-bottom: 25px; padding: 20px; background-color: #f8f9fa; border-left: 4px solid #3498db; border-radius: 4px;">
                      <p style="margin: 0 0 5px; color: #7f8c8d; font-size: 14px; text-transform: uppercase;">${label}</p>
                      <p style="margin: 0; color: #2c3e50; font-size: 16px;">${value}</p>
                    </div>`
                  )
                  .join("")}
              </td></tr>
              <tr><td style="background-color: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; text-align: center;">
                <p style="margin: 0; color: #7f8c8d;">This email was sent from your website's contact form</p>
                <p style="margin: 0; color: #95a5a6; font-size: 12px;">© 2025 IvyCounsel. All rights reserved.</p>
              </td></tr>
            </table>
          </td></tr>
        </table>
        </body>
        </html>
      `,
    });

    // 2. Send confirmation email to the user
    const { error: userError } = await resend.emails.send({
      from: `IvyCounsel <${process.env.RESEND_FROM_EMAIL}>`,
      to: email,
      subject: "Thanks for contacting IvyCounsel!",
      html: `
        <!DOCTYPE html>
        <html lang="en" style="margin: 0; padding: 0;">
        <head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/></head>
        <body style="margin: 0; padding: 0; background-color: #f0f4f8; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="padding: 40px 0;">
            <tr><td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); overflow: hidden;">
                <tr><td style="background-color: #9335e6; padding: 40px 30px; text-align: center;">
                  <h1 style="color: #ffffff; margin: 0;">IvyCounsel</h1>
                  <p style="color: #e0dbfc; margin: 8px 0 0;">Empowering your global education journey</p>
                </td></tr>
                <tr><td style="padding: 40px 30px;">
                  <h2 style="margin: 0; color: #2c3e50;">Hello ${name},</h2>
                  <p style="color: #555; font-size: 16px; line-height: 1.6;">Thank you for contacting <strong>IvyCounsel</strong>!<br/>We’ve received your message and will get back to you shortly.</p>
                  <div style="margin-top: 30px; padding: 20px; background-color: #f9f9fc; border-left: 4px solid #9335e6; border-radius: 8px;">
                    <p style="margin: 0; font-size: 14px; color: #666;">📬 Your submission details:</p>
                    <p style="margin: 10px 0 0; font-size: 15px;"><strong>Name:</strong> ${name}</p>
                    <p style="margin: 5px 0 0; font-size: 15px;"><strong>Email:</strong> ${email}</p>
                    ${phone ? `<p style="margin: 5px 0 0; font-size: 15px;"><strong>Phone:</strong> ${phone}</p>` : ""}
                    ${school ? `<p style="margin: 5px 0 0; font-size: 15px;"><strong>School:</strong> ${school}</p>` : ""}
                    ${grade ? `<p style="margin: 5px 0 0; font-size: 15px;"><strong>Grade:</strong> ${grade}</p>` : ""}
                    <p style="margin: 5px 0 0; font-size: 15px;"><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
                  </div>
                </td></tr>
                <tr><td style="background-color: #f4f4f4; padding: 20px 30px; text-align: center;">
                  <p style="margin: 0; font-size: 13px; color: #999;">© 2025 IvyCounsel. All rights reserved.</p>
                  <p style="margin: 5px 0 0; font-size: 12px; color: #bbb;">Made with ❤️ to help you study abroad.</p>
                </td></tr>
              </table>
            </td></tr>
          </table>
        </body>
        </html>
      `,
    });

    if (adminError || userError) {
      console.error("Email sending error(s):", { adminError, userError });
      return new Response(JSON.stringify({ error: adminError || userError }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Unexpected error", err);
    return new Response(JSON.stringify({ error: "Unexpected error" }), {
      status: 500,
    });
  }
}
