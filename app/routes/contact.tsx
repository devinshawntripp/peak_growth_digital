import React from 'react';
import type { MetaFunction, ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useActionData, useNavigation } from "@remix-run/react";
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
  const message = formData.get("message") as string;

  const errors: { [key: string]: string } = {};
  if (!name) errors.name = "Name is required";
  if (!email) errors.email = "Email is required";
  else if (!validateEmail(email)) errors.email = "Invalid email address";
  if (!message) errors.message = "Message is required";

  if (Object.keys(errors).length > 0) {
    return json({ errors }, { status: 400 });
  }

  try {
    // Save to database and send email (unchanged)
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        message,
      },
    });

    // Send email
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
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
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
          <label className="label" htmlFor="message">
            <span className="label-text">Message</span>
          </label>
          <textarea id="message" name="message" className={`textarea textarea-bordered h-24 ${actionData?.errors?.message ? 'textarea-error' : ''}`} required></textarea>
          {actionData?.errors?.message && <p className="text-error text-sm mt-1">{actionData.errors.message}</p>}
        </div>
        <button type="submit" className="btn btn-primary" disabled={navigation.state === "submitting"}>
          {navigation.state === "submitting" ? "Sending..." : "Send Message"}
        </button>
      </Form>
    </div>
  );
}