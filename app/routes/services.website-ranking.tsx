import React from 'react';
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import FAQSection from '~/components/FAQSection';

export const meta: MetaFunction = () => {
  return [
    { title: "Website Ranking Services - Peak Growth Digital" },
    { name: "description", content: "Improve your website's visibility in search engine results with our expert SEO strategies. Learn about our website ranking services and how we can boost your online presence." },
  ];
};

const faqs = [
  {
    question: "How long does it take to improve my website's ranking?",
    answer: "Website ranking is a long-term process. On average, it can take anywhere from 3 to 6 months to see significant improvements, depending on the competition and the current state of your website. However, you may start seeing some improvements within a few weeks of implementing our strategies."
  },
  {
    question: "Can I rank for any keyword?",
    answer: "While it's possible to rank for any keyword, the difficulty varies greatly. We focus on a balanced approach of high-volume and long-tail keywords to maximize your ranking potential. We'll work with you to identify the most valuable and achievable keywords for your business."
  },
  {
    question: "What's the difference between organic ranking and paid ads?",
    answer: "Organic ranking refers to earning your spot on search results naturally through SEO efforts, while paid ads (like Google Ads) require payment for immediate visibility. Organic ranking offers long-term benefits and tends to have higher trust from users, but it takes time. Paid ads provide immediate visibility but stop when you stop paying."
  },
  {
    question: "Do you guarantee first page rankings?",
    answer: "While we can't guarantee specific rankings (no one can, and you should be wary of those who do), we have a strong track record of significantly improving our clients' search engine positions. We use proven strategies and continuously adapt to search engine algorithm changes to give you the best chance of ranking well."
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

export default function WebsiteRanking() {
  return (
    <motion.div 
      className="container mx-auto px-4 py-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 className="text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" variants={itemVariants}>
        Website Ranking
      </motion.h1>
      <motion.p className="mb-6 text-xl text-center max-w-3xl mx-auto" variants={itemVariants}>
        In today's competitive digital world, securing top spots on search engines like Google is vital. Website ranking isn't just about being found; it's about being chosen.
      </motion.p>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12" variants={itemVariants}>
        <div className="bg-base-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">What is Website Ranking?</h2>
          <p>
            Website ranking refers to the position your website holds on search engine result pages (SERPs) when someone searches for a specific keyword or phrase. Search engines rank websites based on hundreds of factors, including relevance, website quality, and user experience.
          </p>
        </div>
        <div className="bg-base-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Why Does Website Ranking Matter?</h2>
          <ul className="list-disc list-inside">
            <li><strong>Increased Visibility:</strong> Higher ranking means more visibility</li>
            <li><strong>Builds Trust:</strong> Top-ranked sites are often perceived as more trustworthy</li>
            <li><strong>Boosts Traffic:</strong> Better rankings lead to more website visitors</li>
            <li><strong>Cost-Effective:</strong> Organic traffic doesn't require ongoing ad spend</li>
          </ul>
        </div>
      </motion.div>

      <motion.h2 className="text-3xl font-semibold mt-12 mb-6 text-center" variants={itemVariants}>Our Website Ranking Process</motion.h2>
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" variants={itemVariants}>
        {[
          { title: "Website Audit", icon: "🔍", description: "Analyze your current website and its performance" },
          { title: "Keyword Research", icon: "🔑", description: "Identify valuable keywords for your business" },
          { title: "On-Page Optimization", icon: "📄", description: "Optimize your website's content and structure" },
          { title: "Content Strategy", icon: "📝", description: "Develop a content strategy targeting chosen keywords" },
          { title: "Link Building", icon: "🔗", description: "Implement ethical link building strategies" },
          { title: "Monitoring", icon: "📊", description: "Continuously monitor rankings and provide reports" },
        ].map((step, index) => (
          <div key={index} className="bg-base-200 p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </motion.div>

      <motion.h2 className="text-3xl font-semibold mt-12 mb-6 text-center" variants={itemVariants}>Common Questions</motion.h2>
      <motion.div variants={itemVariants}>
        <FAQSection faqs={faqs} />
      </motion.div>
      
      <motion.div className="mt-12 text-center" variants={itemVariants}>
        <Link to="/contact" className="btn btn-primary btn-lg">Boost Your Website Ranking</Link>
      </motion.div>
    </motion.div>
  );
}