import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { saveLeadToStore } from "@/lib/leadsStore";

const consultationSchema = z.object({
  name: z.string().min(2, "Full Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(6, "Please enter a valid phone number."),
  service: z.string().min(1, "Please select a service."),
  description: z.string().min(10, "Please provide a description (at least 10 characters).")
});

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;
const adminEmail = process.env.ADMIN_EMAIL || "mohitaggarwal9205@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = consultationSchema.parse(body);

    // Save lead to local store
    const savedLead = await saveLeadToStore(validatedData);

    // Send emails via Resend if API key is configured
    if (resend) {
      try {
        // 1. Admin notification email
        await resend.emails.send({
          from: "YourDevelopers <onboarding@resend.dev>",
          to: adminEmail,
          subject: "🚀 New Consultation Request",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; rounded: 8px;">
              <h2 style="color: #ff8901; margin-bottom: 10px;">🚀 New Consultation Request</h2>
              <p style="color: #666; font-size: 14px;">A new lead has submitted a request on your website.</p>
              <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
              <table style="width: 100%; font-size: 14px; color: #333;">
                <tr><td style="font-weight: bold; width: 140px; padding: 6px 0;">Name:</td><td>${validatedData.name}</td></tr>
                <tr><td style="font-weight: bold; padding: 6px 0;">Email:</td><td><a href="mailto:${validatedData.email}">${validatedData.email}</a></td></tr>
                <tr><td style="font-weight: bold; padding: 6px 0;">Phone/WhatsApp:</td><td><a href="tel:${validatedData.phone}">${validatedData.phone}</a></td></tr>
                <tr><td style="font-weight: bold; padding: 6px 0;">Service Needed:</td><td><span style="background: #fff4e5; color: #ff8901; padding: 3px 8px; border-radius: 4px; font-weight: bold;">${validatedData.service}</span></td></tr>
                <tr><td style="font-weight: bold; padding: 6px 0; vertical-align: top;">Project Details:</td><td style="white-space: pre-wrap;">${validatedData.description}</td></tr>
              </table>
              <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
              <p style="font-size: 12px; color: #888;">Submitted on ${new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })} IST</p>
            </div>
          `
        });

        // 2. Customer confirmation email
        await resend.emails.send({
          from: "YourDevelopers <onboarding@resend.dev>",
          to: validatedData.email,
          subject: "Thanks for contacting YourDevelopers 🚀",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; rounded: 8px;">
              <h2 style="color: #191918; margin-bottom: 10px;">Hi ${validatedData.name},</h2>
              <p style="color: #333; font-size: 15px; line-height: 1.6;">We've received your consultation request successfully.</p>
              <p style="color: #555; font-size: 14px; line-height: 1.6;">Our team will review your project details for <strong>${validatedData.service}</strong> and contact you within 24 hours.</p>
              <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
              <p style="color: #888; font-size: 13px;">Thank you for choosing <strong>YourDevelopers</strong>.</p>
            </div>
          `
        });
      } catch (emailErr) {
        console.warn("Resend email delivery error:", emailErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Request submitted successfully.",
      lead: savedLead
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.issues },
        { status: 400 }
      );
    }

    console.error("Consultation API error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}
