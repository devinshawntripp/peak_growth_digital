import React from 'react';
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import FAQSection from '~/components/FAQSection';

export const meta: MetaFunction = () => {
  return [
    { title: "Facebook Ads Service - Peak Growth Digital" },
    { name: "description", content: "Create targeted, high-converting Facebook ad campaigns that reach the right audience and deliver measurable results with Peak Growth Digital." },
  ];
};

const faqs = [
  {
    question: "How much should I spend on Facebook Ads?",
    answer: "Your budget depends on your business goals and the audience size you want to reach. We can help you determine a budget that will deliver measurable results. Facebook Ads can be run on any budget, making them accessible to businesses of all sizes."
  },
  {
    question: "How long does it take to see results from Facebook Ads?",
    answer: "Facebook Ads often show results quickly, especially for campaigns focused on traffic or engagement. You can typically start seeing results within the first 48 hours, although it can take longer to optimize campaigns for conversions or lead generation."
  },
  {
    question: "What types of ads can I run on Facebook?",
    answer: "Facebook offers a variety of ad formats, including image ads, video ads, carousel ads (multiple images or videos), and collection ads (a mobile-first format that allows users to browse products). We can help you choose the right format based on your business goals."
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

export default function FacebookAdsService() {
  return (
    <motion.div 
      className="container mx-auto px-4 py-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 className="text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" variants={itemVariants}>
        Facebook Ads Service
      </motion.h1>
      <motion.p className="mb-6 text-xl text-center max-w-3xl mx-auto" variants={itemVariants}>
        Facebook is one of the most powerful advertising platforms available, with over 2.8 billion active users. At Peak Growth Digital, we create targeted, high-converting Facebook ad campaigns that reach the right audience and deliver measurable results.
      </motion.p>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12" variants={itemVariants}>
        <div className="bg-base-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">What is Facebook Ads?</h2>
          <p>
            Facebook Ads allow businesses to create targeted advertisements that appear on users' newsfeeds, stories, and even in Messenger. Unlike traditional advertising, Facebook's advanced targeting tools allow you to zero in on your ideal customers based on demographics, interests, behaviors, and even location.
          </p>
        </div>
        <div className="bg-base-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Why Facebook Ads Are Crucial for Your Business:</h2>
          <ul className="list-disc list-inside">
            <li><strong>Precise Targeting:</strong> Reach specific demographics, interests, and behaviors</li>
            <li><strong>Massive Reach:</strong> Connect with billions of users worldwide</li>
            <li><strong>Cost-Effective:</strong> Pay-per-click or pay-per-impression model</li>
          </ul>
        </div>
      </motion.div>

      <motion.h2 className="text-3xl font-semibold mt-12 mb-6 text-center" variants={itemVariants}>How We Create High-Converting Facebook Ad Campaigns</motion.h2>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12" variants={itemVariants}>
        {[
          { title: "Audience Research", icon: "🔍", description: "We research and create targeted audience segments" },
          { title: "Ad Design", icon: "🎨", description: "We design visually appealing ads with compelling copy" },
          { title: "Campaign Setup", icon: "⚙️", description: "We set up and optimize your campaigns for best performance" },
          { title: "Analytics", icon: "📊", description: "We provide detailed reports on campaign performance" },
        ].map((step, index) => (
          <div key={index} className="bg-base-200 p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </motion.div>

      <motion.h2 className="text-3xl font-semibold mt-12 mb-6 text-center" variants={itemVariants}>Common Questions About Facebook Ads</motion.h2>
      <motion.div variants={itemVariants}>
        <FAQSection faqs={faqs} />
      </motion.div>

      <motion.h2 className="text-3xl font-semibold mt-12 mb-6 text-center" variants={itemVariants}>Benefits of Facebook Ads</motion.h2>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12" variants={itemVariants}>
        {[
          { title: "Increased Website Traffic", description: "Drive more traffic to your website, boosting sales and conversions" },
          { title: "Lead Generation", description: "Collect valuable leads through Facebook's Lead Ads feature" },
          { title: "Brand Awareness", description: "Get your brand in front of the right people, locally or globally" },
          { title: "Customer Engagement", description: "Encourage interaction and build stronger customer relationships" },
        ].map((benefit, index) => (
          <div key={index} className="bg-base-200 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </motion.div>
      
      <motion.div className="mt-12 text-center" variants={itemVariants}>
        <Link to="/contact" className="btn btn-primary btn-lg">Start Your Facebook Ads Campaign</Link>
      </motion.div>
    </motion.div>
  );
}