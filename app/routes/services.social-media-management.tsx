import React from 'react';
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import FAQSection from '~/components/FAQSection';

export const meta: MetaFunction = () => {
  return [
    { title: "Social Media Management Services - Peak Growth Digital" },
    { name: "description", content: "Comprehensive social media management services for Instagram, Facebook, and Twitter. Boost your brand's online presence with Peak Growth Digital." },
  ];
};

const faqs = [
  {
    question: "How often should I post on social media?",
    answer: "The ideal posting frequency depends on the platform. For example, posting once a day on Instagram can help keep your audience engaged, while 2-3 tweets per day on Twitter ensures you're part of the conversation. We tailor your posting schedule based on your audience's behavior and platform best practices."
  },
  {
    question: "Do I need to be on all social media platforms?",
    answer: "Not necessarily. The key is to be where your audience is. For example, if your business is visual-heavy, Instagram is a must. If you're in a professional industry, LinkedIn might be a better fit. We help determine which platforms are best for your business and focus on those."
  },
  {
    question: "Can social media help with customer support?",
    answer: "Yes! Social media is a great platform for customer service. Customers often turn to social media to ask questions or voice concerns. By being responsive and addressing customer inquiries in real-time, you can provide a better customer experience and improve brand loyalty."
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

export default function SocialMediaManagement() {
  return (
    <motion.div 
      className="container mx-auto px-4 py-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 className="text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" variants={itemVariants}>
        Social Media Management
      </motion.h1>
      <motion.p className="mb-6 text-xl text-center max-w-3xl mx-auto" variants={itemVariants}>
        In today's digital world, having a strong presence on social media is essential for engaging with your audience and building your brand. At Peak Growth Digital, we provide comprehensive Social Media Management services that help you make the most of platforms like Instagram, Facebook, and Twitter.
      </motion.p>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12" variants={itemVariants}>
        <div className="bg-base-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">What is Social Media Management?</h2>
          <p>
            Social media management involves curating, scheduling, and optimizing your brand's social media content across platforms. It's not just about posting regularly—it's about creating engaging, relevant content that connects with your audience, drives traffic, and converts followers into customers.
          </p>
        </div>
        <div className="bg-base-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Why is Social Media Important?</h2>
          <ul className="list-disc list-inside">
            <li><strong>Brand Awareness:</strong> Build visibility and recognition</li>
            <li><strong>Customer Engagement:</strong> Interact with your audience in real-time</li>
            <li><strong>Increased Website Traffic:</strong> Drive traffic to your website</li>
            <li><strong>Customer Insights:</strong> Gain valuable feedback and understand your audience</li>
          </ul>
        </div>
      </motion.div>

      <motion.h2 className="text-3xl font-semibold mt-12 mb-6 text-center" variants={itemVariants}>Platforms We Manage</motion.h2>
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" variants={itemVariants}>
        {[
          { title: "Instagram", icon: "📸", description: "Ideal for visual storytelling and building a community" },
          { title: "Facebook", icon: "👍", description: "Versatile platform suitable for any type of business" },
          { title: "Twitter", icon: "🐦", description: "Perfect for quick updates and real-time conversations" },
        ].map((platform, index) => (
          <div key={index} className="bg-base-200 p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl mb-4">{platform.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{platform.title}</h3>
            <p>{platform.description}</p>
          </div>
        ))}
      </motion.div>

      <motion.h2 className="text-3xl font-semibold mt-12 mb-6 text-center" variants={itemVariants}>Our Social Media Management Services</motion.h2>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" variants={itemVariants}>
        {[
          { title: "Content Creation", icon: "✍️", description: "Custom content that resonates with your audience" },
          { title: "Content Scheduling", icon: "🗓️", description: "Optimal timing for maximum engagement" },
          { title: "Audience Engagement", icon: "💬", description: "Active monitoring and interaction with your audience" },
          { title: "Analytics and Reporting", icon: "📊", description: "Track performance and adjust strategies" },
          { title: "Social Media Advertising", icon: "📣", description: "Targeted ads to boost visibility and reach" },
        ].map((service, index) => (
          <div key={index} className="bg-base-200 p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </motion.div>

      <motion.h2 className="text-3xl font-semibold mt-12 mb-6 text-center" variants={itemVariants}>Common Questions</motion.h2>
      <motion.div variants={itemVariants}>
        <FAQSection faqs={faqs} />
      </motion.div>

      <motion.h2 className="text-3xl font-semibold mt-12 mb-6 text-center" variants={itemVariants}>Benefits of Social Media Management</motion.h2>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12" variants={itemVariants}>
        {[
          { title: "Consistent Branding", description: "Ensure a consistent look, tone, and message across all platforms" },
          { title: "Increased Engagement", description: "More likes, shares, and comments on your posts" },
          { title: "Boosted Website Traffic", description: "Drive traffic from social media to your website" },
          { title: "Real-Time Feedback", description: "Understand customer sentiment and improve your offerings" },
        ].map((benefit, index) => (
          <div key={index} className="bg-base-200 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </motion.div>
      
      <motion.div className="mt-12 text-center" variants={itemVariants}>
        <Link to="/contact" className="btn btn-primary btn-lg">Start Your Social Media Journey</Link>
      </motion.div>
    </motion.div>
  );
}