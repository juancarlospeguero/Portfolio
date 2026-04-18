// pages/api/contact.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const { name, email, company, message } = req.body ?? {};

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY missing");
      return res.status(500).json({
        success: false,
        message: "Server configuration error",
      });
    }

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev", // 반드시 도메인 인증 후 교체
        to: " juancarlospeguerousa@gmail.com",
        subject: `New Inquiry from ${escapeHtml(name)}`,
        reply_to: email,
        html: `
          <h2>New Portfolio Inquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Company:</strong> ${escapeHtml(company || "N/A")}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message)}</p>
        `,
      }),
    });

    let data = null;

    try {
      data = await resendResponse.json();
    } catch {
      data = null;
    }

    if (!resendResponse.ok) {
      console.error("Resend API Error:", data);
      return res.status(500).json({
        success: false,
        message: "Email sending failed",
      });
    }

    console.log("Email sent successfully:", data?.id);

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
      id: data?.id ?? null,
    });

  } catch (error) {
    console.error("Server Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

// XSS 방지
function escapeHtml(text) {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}