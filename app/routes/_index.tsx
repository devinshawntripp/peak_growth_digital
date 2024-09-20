import React from 'react';
import type { MetaFunction, ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useActionData } from "@remix-run/react";
import { motion, AnimatePresence } from "framer-motion";
import JsonLd from "~/components/JsonLd";
import Testimonials from "~/components/Testimonials";
import PricingCalculator from "~/components/PricingCalculator";
import NewsletterSignup from "~/components/NewsletterSignup";

export const meta: MetaFunction = () => {
  return [
    { title: "Peak Growth Digital - Boost Your Online Presence" },
    { name: "description", content: "Peak Growth Digital offers website ranking, renting, creation, GBP ranking, and general digital services to help your business grow online." },
  ];
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");

  // Here you would typically add the email to your newsletter service
  // For now, we'll just simulate a successful subscription
  console.log(`Subscribing email: ${email}`);

  return json({ success: true });
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Index() {
  const actionData = useActionData<{ success?: boolean }>();

  const jsonLdData = {
    "@type": "WebSite",
    name: "Peak Growth Digital",
    description: "We help businesses grow their online presence through innovative digital marketing strategies and services.",
    url: "https://peakgrowthdigital.com",
  };

  const services = [
    { name: "Website Ranking", path: "/services/website-ranking" },
    { name: "Website Renting", path: "/services/website-renting" },
    { name: "Website Creation", path: "/services/website-creation" },
    { name: "GBP Ranking", path: "/services/gbp-ranking" },
    { name: "Digital Services", path: "/services/digital-services" },
    { name: "Facebook Ads", path: "/services/facebook-ads" },
    { name: "Google Ads", path: "/services/google-ads" },
    { name: "Social Media Management", path: "/services/social-media-management" },
    { name: "Business Citations", path: "/services/business-citations" }
  ];

  return (
    <>
      <JsonLd data={jsonLdData} />
      <AnimatePresence>
        <motion.div
          className="container mx-auto px-4"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.section className="hero min-h-screen bg-base-200" variants={itemVariants}>
            <div className="hero-content text-center">
              <div className="max-w-md">
                <motion.h1 
                  className="text-5xl font-bold"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Welcome to Peak Growth Digital
                </motion.h1>
                <motion.p 
                  className="py-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Your partner in navigating the digital landscape. We offer a suite of services designed to enhance your online presence and meet your specific needs.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Link to="/contact" className="btn btn-primary">Get Started</Link>
                </motion.div>
              </div>
            </div>
          </motion.section>

          <motion.section className="py-12" variants={itemVariants}>
            <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <motion.div key={service.name} className="card bg-base-100 shadow-xl" variants={itemVariants}>
                  <div className="card-body">
                    <h3 className="card-title">{service.name}</h3>
                    <p>We offer top-notch {service.name.toLowerCase()} services to boost your online presence and drive growth.</p>
                    <div className="card-actions justify-end">
                      <Link to={service.path} className="btn btn-primary btn-sm">Learn More</Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section className="py-12 bg-base-200" variants={itemVariants}>
            <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
            <Testimonials />
          </motion.section>

          <motion.section className="py-12" variants={itemVariants}>
            <h2 className="text-3xl font-bold text-center mb-8">Pricing Calculator</h2>
            <PricingCalculator />
          </motion.section>

          <motion.section className="py-12 bg-base-200" variants={itemVariants}>
            <h2 className="text-3xl font-bold text-center mb-8">Stay Updated</h2>
            <NewsletterSignup />
            {actionData?.success && (
              <motion.p 
                className="text-success text-center mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Thank you for subscribing to our newsletter!
              </motion.p>
            )}
          </motion.section>

          <motion.section className="py-12" variants={itemVariants}>
            <h2 className="text-3xl font-bold text-center mb-8">Ready to Grow Your Online Presence?</h2>
            <div className="text-center">
              <Link to="/contact" className="btn btn-primary btn-lg">Contact Us Today</Link>
            </div>
          </motion.section>
        </motion.div>
      </AnimatePresence>
    </>
  );
}