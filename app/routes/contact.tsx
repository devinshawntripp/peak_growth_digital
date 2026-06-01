import React from 'react';
import type { MetaFunction, ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, Link, useActionData, useNavigation } from "@remix-run/react";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";

const prisma = new PrismaClient();

export const meta: MetaFunction = () => {
  return [
    { title: "Contact Peak Growth Digital - Get in Touch" },
    { name: "description", content: "Contact Peak Growth Digital for all your digital marketing needs. We're here to help your business grow online." },
  ];
};

function validateEmail(email: string) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = ((formData.get("phone") as string) || "").trim();
  const consentCare = formData.get("consentCare") === "on";
  const consentPromo = formData.get("consentPromo") === "on";
  const smsConsent = consentCare || consentPromo;
  const message = formData.get("message") as string;

  const errors: { [key: string]: string } = {};
  if (!name) errors.name = "Name is required";
  if (!email) errors.email = "Email is required";
  else if (!validateEmail(email)) errors.email = "Invalid email address";
  if (!message) errors.message = "Message is required";
  if (smsConsent && !phone) errors.phone = "Enter your phone number to receive text messages";

  if (Object.keys(errors).length > 0) {
    return json({ errors }, { status: 400 });
  }

  // Record SMS opt-in for consent record-keeping (separate consents)
  const consentRecord = smsConsent && phone
    ? `\n\n--- SMS opt-in ---\nCustomer care consent: ${consentCare ? "YES" : "no"}\nPromotional consent: ${consentPromo ? "YES" : "no"}\nPhone: ${phone}\nConsent captured: ${new Date().toISOString()} via https://peakgrowthdigital.com/contact`
    : (phone ? `\n\nPhone: ${phone}` : "");

  try {
    await prisma.contact.create({
      data: {
        name,
        email,
        message: message + consentRecord,
      },
    });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false // Accept self-signed certificates
      }
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || "(not provided)"}
        Customer care SMS consent: ${consentCare && phone ? "YES" : "no"}
        Promotional SMS consent: ${consentPromo && phone ? "YES" : "no"}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "(not provided)"}</p>
        <p><strong>Customer care SMS consent:</strong> ${consentCare && phone ? "YES" : "no"}</p>
        <p><strong>Promotional SMS consent:</strong> ${consentPromo && phone ? "YES" : "no"}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return json({ success: true });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return json({ success: false, error: "An error occurred. Please try again." }, { status: 500 });
  }
};

export default function Contact() {
  const actionData = useActionData<{ success?: boolean, error?: string, errors?: { [key: string]: string } }>();
  const navigation = useNavigation();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="mb-8">Have a question or want to learn more about our services? Get in touch with us using the form below.</p>

      {actionData?.success && (
        <div className="alert alert-success mb-4">
          Thank you for your message. We'll get back to you soon!
        </div>
      )}

      {actionData?.error && (
        <div className="alert alert-error mb-4">
          {actionData.error}
        </div>
      )}

      <Form method="post" className="max-w-md">
        <div className="form-control mb-4">
          <label className="label" htmlFor="name">
            <span className="label-text">Name</span>
          </label>
          <input type="text" id="name" name="name" className={`input input-bordered ${actionData?.errors?.name ? 'input-error' : ''}`} required />
          {actionData?.errors?.name && <p className="text-error text-sm mt-1">{actionData.errors.name}</p>}
        </div>
        <div className="form-control mb-4">
          <label className="label" htmlFor="email">
            <span className="label-text">Email</span>
          </label>
          <input type="email" id="email" name="email" className={`input input-bordered ${actionData?.errors?.email ? 'input-error' : ''}`} required />
          {actionData?.errors?.email && <p className="text-error text-sm mt-1">{actionData.errors.email}</p>}
        </div>
        <div className="form-control mb-4">
          <label className="label" htmlFor="phone">
            <span className="label-text">Phone <span className="text-base-content/60">(optional — required for text updates)</span></span>
          </label>
          <input type="tel" id="phone" name="phone" autoComplete="tel" placeholder="(555) 555-5555" className={`input input-bordered ${actionData?.errors?.phone ? 'input-error' : ''}`} />
          {actionData?.errors?.phone && <p className="text-error text-sm mt-1">{actionData.errors.phone}</p>}
        </div>
        <div className="form-control mb-4">
          <label className="label" htmlFor="message">
            <span className="label-text">Message</span>
          </label>
          <textarea id="message" name="message" className={`textarea textarea-bordered h-24 ${actionData?.errors?.message ? 'textarea-error' : ''}`} required></textarea>
          {actionData?.errors?.message && <p className="text-error text-sm mt-1">{actionData.errors.message}</p>}
        </div>
        <div className="form-control mb-4">
          <p className="text-sm font-medium mb-2">Text message preferences (optional — choose one or both):</p>
          <label className="cursor-pointer flex items-start gap-3 mb-2">
            <input type="checkbox" id="consentCare" name="consentCare" className="checkbox checkbox-sm mt-1" />
            <span className="label-text text-sm leading-snug">
              <strong>Customer care:</strong> I agree to receive customer care / service SMS text messages from
              Peak Growth Digital LLC (responses to inquiries, appointment coordination, and follow-ups) at the number provided.
            </span>
          </label>
          <label className="cursor-pointer flex items-start gap-3 mb-2">
            <input type="checkbox" id="consentPromo" name="consentPromo" className="checkbox checkbox-sm mt-1" />
            <span className="label-text text-sm leading-snug">
              <strong>Promotions:</strong> I agree to receive marketing / promotional SMS text messages from
              Peak Growth Digital LLC (special offers, discounts, and event promotions) at the number provided.
            </span>
          </label>
          <p className="text-xs text-base-content/70 leading-snug mt-1">
            Each consent is separate and optional. Consent is not a condition of purchase. Message frequency varies.
            Message and data rates may apply. Reply STOP to opt out or HELP for help.
            See our <Link to="/privacy-policy" className="link">Privacy Policy</Link> and{" "}
            <Link to="/terms-of-service" className="link">Terms of Service</Link>.
          </p>
        </div>
        <button type="submit" className="btn btn-primary" disabled={navigation.state === "submitting"}>
          {navigation.state === "submitting" ? "Sending..." : "Send Message"}
        </button>
      </Form>


      <div className="flex justify-center">
        <iframe
          src="https://schedule.devintripp.com/embed/scheduler?userId=1ae621ea-0e1c-4511-a2fc-ad73c873cb84&apiKey=e2884122e3aa4625d8ee2a31c71de4c8c3592550ef85e2a57e230202b29f320e"
          width="100%"
          height="600"
        ></iframe>
      </div>
    </div>
  );
}
