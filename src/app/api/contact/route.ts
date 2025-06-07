import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, message } = body;

  try {
    const { error } = await resend.emails.send({
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

    if (error) {
      console.error("New Error", JSON.stringify(error));
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Unexpected error" }), {
      status: 500,
    });
  }
}
