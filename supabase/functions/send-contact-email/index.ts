// @ts-nocheck
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Simple email validation function
function isValidEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

const handler = async (req: Request): Promise<Response> => {
  // Preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  // Only accept POST
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  try {
    const body: ContactEmailRequest = await req.json();

    const { name, email, subject, message } = body ?? {};

    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return new Response(JSON.stringify({ error: "Invalid email address" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!supabaseUrl || !supabaseKey) {
      console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
      return new Response(
        JSON.stringify({ error: "Server configuration error" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data: contactMessage, error: dbError } = await supabase
      .from("contact_messages")
      .insert({ name, email, subject, message })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      return new Response(JSON.stringify({ error: "Failed to save message" }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Send emails using Resend if API key present
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (resendApiKey) {
      const resend = new Resend(resendApiKey);

      try {
        // Mail to yourself (portfolio owner)
        await resend.emails.send({
          from: "Portfolio Contact <onboarding@resend.dev>", // Change to your verified email if needed
          to: ["mdaabidali28@gmail.com"],
          subject: `New Contact Form Message: ${subject}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <div style="background:#f5f5f5;padding:15px;border-radius:5px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          `,
        });
        console.log("Owner notification email sent.");
      } catch (ownerMailError) {
        console.error("Failed to send mail to owner:", ownerMailError);
      }

      try {
        // Confirmation mail to user
        await resend.emails.send({
          from: "Aabid Ali <mdaabidali28@gmail.com>", // <-- yahan apna verified email daalo
          to: [email],
          subject: "Thank you for contacting me!",
          html: `
            <div style="font-family: Arial, sans-serif; color: #333;">
              <h2 style="color: #2c3e50;">Thank you for your message, ${name}!</h2>
              <p>I have received your message regarding "<strong>${subject}</strong>".</p>
              <p style="margin-top: 15px;">Here’s what you sent:</p>
              <div style="background:#f5f5f5;padding:15px;border-radius:5px;white-space:pre-line;">
                ${message}
              </div>
              <p style="margin-top: 20px;">I will get back to you shortly.</p>
              <p>— Aabid Ali</p>
            </div>
          `,
        });
        console.log("Confirmation email sent to user:", email);
      } catch (confirmationMailError) {
        console.error(
          "Confirmation email sending failed:",
          confirmationMailError
        );
      }
    } else {
      console.warn("RESEND_API_KEY is missing, emails not sent.");
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Message received successfully",
        id: contactMessage?.id,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (err) {
    console.error("Handler error:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);
