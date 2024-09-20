import React from 'react';
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import FAQSection from '~/components/FAQSection';

export const meta: MetaFunction = () => {
  return [
    { title: "Business Citations Service - Peak Growth Digital" },
    { name: "description", content: "Improve your local search visibility with our comprehensive business citations service. Boost your local SEO and credibility with Peak Growth Digital." },
  ];
};

const faqs = [
  {
    question: "How long does it take to see results from citations?",
    answer: "Citations typically start to impact your local search rankings within 4 to 6 weeks of submission. It takes time for search engines to crawl and index your listings, but the long-term benefits are significant."
  },
  {
    question: "Can I update my citations if my business information changes?",
    answer: "Yes! If your business address or phone number changes, we can update your existing citations to ensure consistency across all platforms."
  },
  {
    question: "Do I need citations if I already have a Google Business Profile?",
    answer: "While a well-optimized Google Business Profile is critical for local SEO, citations on other reputable platforms reinforce your business's legitimacy and improve your chances of ranking higher in local searches."
  },
  {
    question: "How do citations impact my local SEO?",
    answer: "Citations act as verification points for search engines like Google. The more consistent and authoritative citations you have, the more likely your business will be considered trustworthy and relevant, improving your chances of ranking in local searches."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function BusinessCitations() {
  return (
    <motion.div 
      className="container mx-auto px-4 py-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 className="text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" variants={itemVariants}>
        Citations Service
      </motion.h1>
      <motion.p className="mb-6 text-xl text-center max-w-3xl mx-auto" variants={itemVariants}>
        One of the key factors that help businesses rank higher in local search results is the presence of consistent and accurate citations across the web. At Peak Growth Digital, we offer a comprehensive Citations Service that helps improve your business's local search visibility, credibility, and trustworthiness.
      </motion.p>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12" variants={itemVariants}>
        <div className="bg-base-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">What Are Citations?</h2>
          <p>
            A citation is any online mention of your business that includes your name, address, and phone number (NAP) information. Citations are found on local directories like Yelp, Yellow Pages, Google My Business, and other relevant platforms.
          </p>
        </div>
        <div className="bg-base-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Why Are Citations Important for Local SEO?</h2>
          <ul className="list-disc list-inside">
            <li><strong>Improves Local Search Rankings:</strong> Helps verify your business's legitimacy and relevance</li>
            <li><strong>Builds Trust and Credibility:</strong> Consistent citations signal trustworthiness</li>
            <li><strong>Increases Online Visibility:</strong> More listings mean more chances to be found</li>
          </ul>
        </div>
      </motion.div>

      <motion.h2 className="text-3xl font-semibold mt-12 mb-6 text-center" variants={itemVariants}>Our Citations Service Packages</motion.h2>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12" variants={itemVariants}>
        {[
          { title: "120 Citations Package", price: "$299", features: ["Manual submission to 120 high-quality directories", "Detailed NAP consistency checks", "Full report of listings"] },
          { title: "300 Citations Package", price: "$449", features: ["Submission to 300 directories", "Ongoing tracking and updates", "Ideal for highly competitive markets"] },
        ].map((package_, index) => (
          <div key={index} className="bg-base-200 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">{package_.title}</h3>
            <p className="text-xl font-bold mb-4">{package_.price}</p>
            <ul className="list-disc list-inside">
              {package_.features.map((feature, fIndex) => (
                <li key={fIndex}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>

      <motion.h2 className="text-3xl font-semibold mt-12 mb-6 text-center" variants={itemVariants}>How We Create and Optimize Citations</motion.h2>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12" variants={itemVariants}>
        {[
          { title: "NAP Consistency Check", icon: "🔍", description: "Audit and ensure consistency of your business information" },
          { title: "Manual Submission", icon: "📝", description: "Manually submit to reputable directories" },
          { title: "Ongoing Monitoring", icon: "👀", description: "Regularly check and update your citations" },
          { title: "Reporting", icon: "📊", description: "Provide detailed reports of all your listings" },
        ].map((step, index) => (
          <div key={index} className="bg-base-200 p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </motion.div>

      <motion.h2 className="text-3xl font-semibold mt-12 mb-6 text-center" variants={itemVariants}>Common Questions About Citations</motion.h2>
      <motion.div variants={itemVariants}>
        <FAQSection faqs={faqs} />
      </motion.div>

      <motion.h2 className="text-3xl font-semibold mt-12 mb-6 text-center" variants={itemVariants}>Benefits of Citations Service</motion.h2>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12" variants={itemVariants}>
        {[
          { title: "Improved Local SEO", description: "Boost your visibility in local search results" },
          { title: "Enhanced Online Visibility", description: "Increase opportunities for potential customers to find you" },
          { title: "Increased Trust", description: "Build legitimacy and trustworthiness for your business" },
          { title: "Ongoing Support", description: "Ensure your citations remain up to date with our larger package" },
        ].map((benefit, index) => (
          <div key={index} className="bg-base-200 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </motion.div>
      
      <motion.div className="mt-12 text-center" variants={itemVariants}>
        <Link to="/contact" className="btn btn-primary btn-lg">Get Started with Citations</Link>
      </motion.div>
    </motion.div>
  );
}