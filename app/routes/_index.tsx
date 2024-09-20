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
  console.log(`Subscribing email: ${email}`);
  return json({ success: true });
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
    { name: "Website Ranking", path: "/services/website-ranking", icon: "🏆" },
    { name: "Website Renting", path: "/services/website-renting", icon: "🏠" },
    { name: "Website Creation", path: "/services/website-creation", icon: "🎨" },
    { name: "GBP Ranking", path: "/services/gbp-ranking", icon: "📍" },
    { name: "Digital Services", path: "/services/digital-services", icon: "💻" },
    { name: "Facebook Ads", path: "/services/facebook-ads", icon: "👍" },
    { name: "Google Ads", path: "/services/google-ads", icon: "🔍" },
    { name: "Social Media Management", path: "/services/social-media-management", icon: "📱" },
    { name: "Business Citations", path: "/services/business-citations", icon: "📊" }
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
          <motion.section className="hero min-h-screen bg-gradient-to-br from-primary to-secondary text-primary-content" variants={itemVariants}>
            <div className="hero-content text-center">
              <div className="max-w-md">
                <motion.h1 
                  className="text-5xl font-bold mb-8"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Welcome to Peak Growth Digital
                </motion.h1>
                <motion.p 
                  className="py-6 text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Your partner in navigating the digital landscape. We offer a suite of services designed to enhance your online presence and meet your specific needs.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Link to="/contact" className="btn btn-secondary btn-lg">Get Started</Link>
                </motion.div>
              </div>
            </div>
          </motion.section>

          <motion.section className="py-20 bg-base-200" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div 
                  key={service.name} 
                  className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="card-body">
                    <h3 className="card-title text-2xl flex items-center">
                      <span className="text-3xl mr-2">{service.icon}</span>
                      {service.name}
                    </h3>
                    <p className="text-base-content/80">We offer top-notch {service.name.toLowerCase()} services to boost your online presence and drive growth.</p>
                    <div className="card-actions justify-end mt-4">
                      <Link to={service.path} className="btn btn-primary">Learn More</Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section className="py-20 bg-gradient-to-br from-accent to-accent-focus text-accent-content" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
            <Testimonials />
          </motion.section>

          <motion.section className="py-20" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center mb-12">Pricing Calculator</h2>
            <PricingCalculator />
          </motion.section>

          <motion.section className="py-20 bg-base-200" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center mb-12">Stay Updated</h2>
            <div className="max-w-md mx-auto">
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
            </div>
          </motion.section>

          <motion.section className="py-20 bg-gradient-to-br from-secondary to-primary text-primary-content" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center mb-8">Ready to Grow Your Online Presence?</h2>
            <div className="text-center">
              <Link to="/contact" className="btn btn-secondary btn-lg">Contact Us Today</Link>
            </div>
          </motion.section>
        </motion.div>
      </AnimatePresence>
    </>
  );
}