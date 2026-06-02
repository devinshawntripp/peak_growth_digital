import React from 'react';
import type { MetaFunction, ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, Link, useActionData, useNavigation } from "@remix-run/react";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";

const prisma = new PrismaClient();

export const meta: MetaFunction = () => {
  return [
    { title: "Sign Up for Text Messages - Peak Growth Digital" },
    { name: "description", content: "Opt in to receive SMS text messages from Peak Growth Digital LLC: customer care and/or promotional updates. Consent-based; reply STOP to opt out." },
  ];
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const name = ((formData.get("name") as string) || "").trim();
  const phone = ((formData.get("phone") as string) || "").trim();
  const email = ((formData.get("email") as string) || "").trim();
  const consentCare = formData.get("consentCare") === "on";
  const consentPromo = formData.get("consentPromo") === "on";

  const errors: { [key: string]: string } = {};
  if (!name) errors.name = "Name is required";
  if (!phone) errors.phone = "Phone number is required";
  if (!consentCare && !consentPromo) errors.consent = "Please check at least one box to opt in";

  if (Object.keys(errors).length > 0) {
    return json({ errors }, { status: 400 });
  }

  const record = `SMS OPT-IN via https://peakgrowthdigital.com/sms-opt-in
Name: ${name}
Phone: ${phone}
Email: ${email || "(not provided)"}
Customer care consent: ${consentCare ? "YES" : "no"}
Promotional consent: ${consentPromo ? "YES" : "no"}
Captured: ${new Date().toISOString()}`;

  let recorded = false;
  try {
    await prisma.contact.create({
      data: { name, email: email || "(no email)", message: record },
    });
    recorded = true;
  } catch (dbError) {
    console.error("SMS opt-in DB save failed (continuing):", dbError instanceof Error ? dbError.message : dbError);
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      tls: { rejectUnauthorized: false },
    });
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: 'New SMS Opt-In',
      text: record,
      html: `<h2>New SMS Opt-In</h2><pre>${record}</pre>`,
    });
    recorded = true;
  } catch (emailError) {
    console.error("SMS opt-in email failed:", emailError instanceof Error ? emailError.message : emailError);
  }

  if (recorded) return json({ success: true });
  return json({ success: false, error: "An error occurred. Please try again." }, { status: 500 });
};

export default function SmsOptIn() {
  const actionData = useActionData<{ success?: boolean, error?: string, errors?: { [key: string]: string } }>();
  const navigation = useNavigation();

  return (
    <div className="container mx-auto px-4 py-10 max-w-xl">
      <h1 className="text-4xl font-bold mb-3">Sign Up for Text Messages</h1>
      <p className="mb-6 text-lg">
        Get text updates from <strong>Peak Growth Digital LLC</strong>. Enter your number and choose what
        you'd like to receive. Your consent is required and you can opt out anytime by replying STOP.
      </p>

      {actionData?.success && (
        <div className="alert alert-success mb-4">
          You're signed up! Reply STOP at any time to opt out, or HELP for help.
        </div>
      )}
      {actionData?.error && (
        <div className="alert alert-error mb-4">{actionData.error}</div>
      )}

      <Form method="post">
        <div className="form-control mb-4">
          <label className="label" htmlFor="name"><span className="label-text">Name</span></label>
          <input type="text" id="name" name="name" className={`input input-bordered ${actionData?.errors?.name ? 'input-error' : ''}`} required />
          {actionData?.errors?.name && <p className="text-error text-sm mt-1">{actionData.errors.name}</p>}
        </div>
        <div className="form-control mb-4">
          <label className="label" htmlFor="phone"><span className="label-text">Mobile phone number</span></label>
          <input type="tel" id="phone" name="phone" autoComplete="tel" placeholder="(555) 555-5555" className={`input input-bordered ${actionData?.errors?.phone ? 'input-error' : ''}`} required />
          {actionData?.errors?.phone && <p className="text-error text-sm mt-1">{actionData.errors.phone}</p>}
        </div>
        <div className="form-control mb-4">
          <label className="label" htmlFor="email"><span className="label-text">Email <span className="text-base-content/60">(optional)</span></span></label>
          <input type="email" id="email" name="email" className="input input-bordered" />
        </div>

        <div className="form-control mb-2">
          <label className="cursor-pointer flex items-start gap-3 mb-3">
            <input type="checkbox" name="consentCare" className="checkbox checkbox-sm mt-1" />
            <span className="text-sm leading-snug">
              <strong>Customer care:</strong> I agree to receive customer care / service text messages from
              Peak Growth Digital LLC (replies to my inquiries, appointment coordination, and follow-ups).
            </span>
          </label>
          <label className="cursor-pointer flex items-start gap-3">
            <input type="checkbox" name="consentPromo" className="checkbox checkbox-sm mt-1" />
            <span className="text-sm leading-snug">
              <strong>Promotions:</strong> I agree to receive marketing / promotional text messages from
              Peak Growth Digital LLC (special offers, discounts, and event promotions).
            </span>
          </label>
          {actionData?.errors?.consent && <p className="text-error text-sm mt-2">{actionData.errors.consent}</p>}
        </div>

        <p className="text-xs text-base-content/70 leading-snug mb-5">
          By submitting this form and checking a box above, you consent to receive SMS text messages from
          Peak Growth Digital LLC at the number provided. Consent is not a condition of any purchase.
          Message frequency varies. Message and data rates may apply. Reply STOP to unsubscribe or HELP for help.
          See our <Link to="/privacy-policy" className="link">Privacy Policy</Link> and{" "}
          <Link to="/terms-of-service" className="link">Terms of Service</Link>.
        </p>

        <button type="submit" className="btn btn-primary btn-wide" disabled={navigation.state === "submitting"}>
          {navigation.state === "submitting" ? "Signing up..." : "Sign Up for Texts"}
        </button>
      </Form>
    </div>
  );
}
