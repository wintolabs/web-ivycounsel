import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, message } = body;

  try {
    // 1. Send email to IvyCounsel admin
    const { error: adminError } = await resend.emails.send({
      from: `IvyCounsel <${process.env.RESEND_FROM_EMAIL}>`,
      to: process.env.RESEND_TO_EMAIL!,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f5f5f5; padding: 20px 0;">
            <tr>
            <td align="center">
                <table cellpadding="0" cellspacing="0" border="0" width="600" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <!-- Header -->
                <tr>
                    <td style="background-color: #2c3e50; padding: 40px 30px; border-radius: 8px 8px 0 0;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600; text-align: center;">IvyCounsel</h1>
                    <p style="margin: 10px 0 0 0; color: #ecf0f1; font-size: 16px; text-align: center;">New Contact Form Submission</p>
                    </td>
                </tr>
                
                <!-- Content -->
                <tr>
                    <td style="padding: 40px 30px;">
                    <h2 style="margin: 0 0 30px 0; color: #2c3e50; font-size: 24px; font-weight: 600;">Contact Details</h2>
                    
                    <!-- Name -->
                    <div style="margin-bottom: 25px; padding: 20px; background-color: #f8f9fa; border-left: 4px solid #3498db; border-radius: 4px;">
                        <p style="margin: 0 0 5px 0; color: #7f8c8d; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Name</p>
                        <p style="margin: 0; color: #2c3e50; font-size: 16px; font-weight: 500;">${name}</p>
                    </div>
                    
                    <!-- Email -->
                    <div style="margin-bottom: 25px; padding: 20px; background-color: #f8f9fa; border-left: 4px solid #3498db; border-radius: 4px;">
                        <p style="margin: 0 0 5px 0; color: #7f8c8d; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
                        <p style="margin: 0; color: #2c3e50; font-size: 16px; font-weight: 500;">
                        <a href="mailto:${email}" style="color: #3498db; text-decoration: none;">${email}</a>
                        </p>
                    </div>
                    
                    <!-- Phone -->
                    <div style="margin-bottom: 25px; padding: 20px; background-color: #f8f9fa; border-left: 4px solid #3498db; border-radius: 4px;">
                        <p style="margin: 0 0 5px 0; color: #7f8c8d; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Phone</p>
                        <p style="margin: 0; color: #2c3e50; font-size: 16px; font-weight: 500;">
                        <a href="tel:${phone}" style="color: #3498db; text-decoration: none;">${phone}</a>
                        </p>
                    </div>
                    
                    <!-- Message -->
                    <div style="margin-bottom: 0; padding: 20px; background-color: #f8f9fa; border-left: 4px solid #3498db; border-radius: 4px;">
                        <p style="margin: 0 0 10px 0; color: #7f8c8d; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
                        <p style="margin: 0; color: #2c3e50; font-size: 16px; line-height: 1.6;">${message.replace(/\n/g, "<br/>")}</p>
                    </div>
                    </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                    <td style="background-color: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; text-align: center;">
                    <p style="margin: 0 0 10px 0; color: #7f8c8d; font-size: 14px;">This email was sent from your website's contact form</p>
                    <p style="margin: 0; color: #95a5a6; font-size: 12px;">© 2025 IvyCounsel. All rights reserved.</p>
                    </td>
                </tr>
                </table>
            </td>
            </tr>
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
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Thank You for Contacting IvyCounsel</title>
          </head>
          <body style="margin: 0; padding: 0; background-color: #f0f4f8; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="padding: 40px 0;">
              <tr>
                <td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
                    <!-- Header -->
                    <tr>
                      <td style="background-color: #5e3cf7; padding: 40px 30px; text-align: center;">
                        <h1 style="margin: 0; font-size: 28px; color: #ffffff;">IvyCounsel</h1>
                        <p style="margin: 8px 0 0; font-size: 16px; color: #e0dbfc;">Empowering your global education journey</p>
                      </td>
                    </tr>

                    <!-- Body -->
                    <tr>
                      <td style="padding: 40px 30px;">
                        <h2 style="margin-top: 0; color: #2c3e50; font-size: 22px;">Hello ${name},</h2>
                        <p style="color: #555; font-size: 16px; line-height: 1.6;">
                          Thank you for reaching out to <strong>IvyCounsel</strong>!
                          We’ve received your message and one of our team members will get back to you shortly.
                        </p>

                        <div style="margin-top: 30px; padding: 20px; background-color: #f9f9fc; border-left: 4px solid #5e3cf7; border-radius: 8px;">
                          <p style="margin: 0; font-size: 14px; color: #666;">📬 Your submission details:</p>
                          <p style="margin: 10px 0 0; font-size: 15px; color: #2c3e50;"><strong>Name:</strong> ${name}</p>
                          <p style="margin: 5px 0 0; font-size: 15px; color: #2c3e50;"><strong>Email:</strong> ${email}</p>
                          ${phone ? `<p style="margin: 5px 0 0; font-size: 15px; color: #2c3e50;"><strong>Phone:</strong> ${phone}</p>` : ""}
                          <p style="margin: 5px 0 0; font-size: 15px; color: #2c3e50;"><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
                        </div>

                      
                      </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                      <td style="background-color: #f4f4f4; padding: 20px 30px; text-align: center;">
                        <p style="margin: 0; font-size: 13px; color: #999;">© 2025 IvyCounsel. All rights reserved.</p>
                        <p style="margin: 5px 0 0; font-size: 12px; color: #bbb;">Made with ❤️ to help you study abroad.</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
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
