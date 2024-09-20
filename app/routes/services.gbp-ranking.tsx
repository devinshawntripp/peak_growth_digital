import React from 'react';
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import FAQSection from '~/components/FAQSection';

export const meta: MetaFunction = () => {
  return [
    { title: "Google Business Profile (GBP) Ranking Services - Peak Growth Digital" },
    { name: "description", content: "Optimize your Google Business Profile to appear prominently in local search results. Learn about our GBP ranking services and how we can boost your local online presence." },
  ];
};

const faqs = [
  {
    question: "How long does it take to see results from GBP optimization?",
    answer: "Results can vary depending on your current standing and competition in your area, but most businesses start seeing improvements in their local ranking within 4 to 8 weeks after optimization efforts begin."
  },
  {
    question: "How important are customer reviews for my GBP ranking?",
    answer: "Reviews are one of the most critical ranking factors. The quantity, quality, and recency of reviews directly influence your local ranking. Encouraging customers to leave reviews and responding to them helps build a strong local presence."
  },
  {
    question: "Can I manage my Google Business Profile myself?",
    answer: "Yes, GBP is user-friendly, and many businesses manage it themselves. However, to see maximum benefit, professional optimization can ensure your profile is fully leveraging all available tools and ranking factors."
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

export default function GBPRanking() {
  return (
    <motion.div 
      className="container mx-auto px-4 py-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 className="text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" variants={itemVariants}>
        Google Business Profile (GBP) Ranking
      </motion.h1>
      <motion.p className="mb-6 text-xl text-center max-w-3xl mx-auto" variants={itemVariants}>
        In today's local-first digital world, having an optimized Google Business Profile (GBP) is essential for attracting nearby customers. At Peak Growth Digital, we specialize in helping businesses rank at the top of local search results through our GBP ranking services, putting your business front and center for users who are searching for your services in your area.
      </motion.p>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12" variants={itemVariants}>
        <div className="bg-base-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">What is GBP Ranking?</h2>
          <p>
            Your Google Business Profile is the profile that appears when someone searches for your business or relevant services in Google Search or Google Maps. Having a well-optimized profile ensures your business shows up when potential customers search for terms like "restaurants near me" or "plumber in [your city]."
          </p>
        </div>
        <div className="bg-base-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">A Fully Optimized GBP Includes:</h2>
          <ul className="list-disc list-inside">
            <li>Business Information: Name, address, phone number (NAP), and business hours.</li>
            <li>Photos & Videos: Visual content of your business, products, or services.</li>
            <li>Customer Reviews: User-generated reviews that build trust and credibility.</li>
            <li>Service Areas: Clearly defined areas that your business serves.</li>
            <li>Business Description: A concise and compelling description of what your business does.</li>
            <li>Posts and Updates: Frequent updates and posts keep your profile active and engaging.</li>
          </ul>
        </div>
      </motion.div>

      <motion.h2 className="text-3xl font-semibold mt-12 mb-6 text-center" variants={itemVariants}>Why is Google Business Profile Important for Local Search?</motion.h2>
      <motion.p className="mb-6 text-center" variants={itemVariants}>
        Google prioritizes local search results, particularly for mobile users. Your GBP serves as a mini-website, offering searchers the most critical information they need to choose your business over others. Optimizing your GBP allows your business to:
      </motion.p>
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" variants={itemVariants}>
        {[
          { title: "Rank Higher", icon: "🏆", description: "Appear at the top of local search results, especially in the local pack" },
          { title: "Increase Foot Traffic", icon: "👣", description: "Optimized profiles lead to more visits, both virtual and physical" },
          { title: "Enhance Credibility", icon: "🤝", description: "Positive reviews and an updated profile build trust" },
        ].map((benefit, index) => (
          <div key={index} className="bg-base-200 p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </motion.div>

      <motion.h2 className="text-3xl font-semibold mt-12 mb-6 text-center" variants={itemVariants}>Common Questions</motion.h2>
      <motion.div variants={itemVariants}>
        <FAQSection faqs={faqs} />
      </motion.div>
      
      <motion.div className="mt-12 text-center" variants={itemVariants}>
        <Link to="/contact" className="btn btn-primary btn-lg">Improve Your Local Presence</Link>
      </motion.div>
    </motion.div>
  );
}