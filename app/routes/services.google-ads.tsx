import React from 'react';
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import FAQSection from '~/components/FAQSection';

export const meta: MetaFunction = () => {
  return [
    { title: "Google Ads Service - Peak Growth Digital" },
    { name: "description", content: "Drive targeted traffic and generate qualified leads with our expert Google Ads management services. Maximize your ROI with Peak Growth Digital." },
  ];
};

const faqs = [
  {
    question: "How much does it cost to run Google Ads?",
    answer: "The cost of Google Ads depends on factors like keyword competition and your budget. Google Ads operates on a bidding system, so you can set a daily or total budget to control how much you spend. We'll work with you to determine an appropriate budget based on your goals."
  },
  {
    question: "How long does it take to see results?",
    answer: "You can start seeing results almost immediately after launching a Google Ads campaign. However, we recommend giving the campaign a few weeks to optimize for the best performance."
  },
  {
    question: "Is Google Ads suitable for all types of businesses?",
    answer: "Yes! Google Ads works well for almost any business type, from local services to e-commerce. Whether you want to drive sales, generate leads, or increase brand awareness, Google Ads can be tailored to meet your needs."
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

export default function GoogleAdsService() {
  return (
    <motion.div 
      className="container mx-auto px-4 py-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 className="text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" variants={itemVariants}>
        Google Ads Service
      </motion.h1>
      <motion.p className="mb-6 text-xl text-center max-w-3xl mx-auto" variants={itemVariants}>
        When people are searching for products or services, they often start with Google. At Peak Growth Digital, we create and manage Google Ads campaigns that drive targeted traffic to your website and generate qualified leads, all while maximizing your return on investment (ROI).
      </motion.p>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12" variants={itemVariants}>
        <div className="bg-base-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">What is Google Ads?</h2>
          <p>
            Google Ads is an online advertising platform that allows businesses to display ads on Google's search engine results pages (SERPs) as well as across Google's vast Display Network. Google Ads works on a pay-per-click (PPC) model, which means you only pay when someone clicks on your ad.
          </p>
        </div>
        <div className="bg-base-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Why Use Google Ads?</h2>
          <ul className="list-disc list-inside">
            <li><strong>Immediate Results:</strong> Delivers immediate visibility in search results</li>
            <li><strong>Highly Targeted:</strong> Target your ideal audience based on various factors</li>
            <li><strong>Measurable ROI:</strong> Detailed analytics for easy performance tracking</li>
          </ul>
        </div>
      </motion.div>

      <motion.h2 className="text-3xl font-semibold mt-12 mb-6 text-center" variants={itemVariants}>Types of Google Ads Campaigns We Offer</motion.h2>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" variants={itemVariants}>
        {[
          { title: "Search Ads", icon: "🔍", description: "Appear at the top of Google's search results for relevant keywords" },
          { title: "Display Ads", icon: "🖼️", description: "Image-based ads across Google's Display Network" },
          { title: "Shopping Ads", icon: "🛍️", description: "Promote products directly on Google's search results pages" },
          { title: "Video Ads", icon: "🎥", description: "Run video ads on YouTube and other Google Video Partners" },
          { title: "Retargeting Ads", icon: "🎯", description: "Show ads to users who have previously visited your website" },
        ].map((campaign, index) => (
          <div key={index} className="bg-base-200 p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl mb-4">{campaign.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{campaign.title}</h3>
            <p>{campaign.description}</p>
          </div>
        ))}
      </motion.div>

      <motion.h2 className="text-3xl font-semibold mt-12 mb-6 text-center" variants={itemVariants}>Our Google Ads Process</motion.h2>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" variants={itemVariants}>
        {[
          { title: "Keyword Research", icon: "🔑", description: "Select the best keywords based on your business goals" },
          { title: "Ad Creation", icon: "✍️", description: "Craft compelling ad copy and design eye-catching visuals" },
          { title: "Campaign Setup", icon: "⚙️", description: "Optimize campaign settings for your target audience" },
          { title: "Optimization", icon: "📈", description: "Continuously monitor and adjust for improved performance" },
          { title: "Reporting", icon: "📊", description: "Provide detailed reports on campaign performance" },
        ].map((step, index) => (
          <div key={index} className="bg-base-200 p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </motion.div>

      <motion.h2 className="text-3xl font-semibold mt-12 mb-6 text-center" variants={itemVariants}>Common Questions About Google Ads</motion.h2>
      <motion.div variants={itemVariants}>
        <FAQSection faqs={faqs} />
      </motion.div>

      <motion.h2 className="text-3xl font-semibold mt-12 mb-6 text-center" variants={itemVariants}>Benefits of Google Ads</motion.h2>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12" variants={itemVariants}>
        {[
          { title: "Instant Visibility", description: "Get in front of users actively searching for your products or services" },
          { title: "Flexible Budgeting", description: "Control your ad spend with customizable budgets" },
          { title: "Measurable Results", description: "Track every click, impression, and conversion for full transparency" },
          { title: "Increased Sales and Leads", description: "Drive qualified traffic to your site, leading to more conversions" },
        ].map((benefit, index) => (
          <div key={index} className="bg-base-200 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </motion.div>
      
      <motion.div className="mt-12 text-center" variants={itemVariants}>
        <Link to="/contact" className="btn btn-primary btn-lg">Start Your Google Ads Campaign</Link>
      </motion.div>
    </motion.div>
  );
}