import React from 'react';
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import FAQSection from '~/components/FAQSection';

export const meta: MetaFunction = () => {
  return [
    { title: "General Digital Services - Peak Growth Digital" },
    { name: "description", content: "Comprehensive digital marketing services to grow your online presence. Learn about our strategies for SEO, content marketing, social media, and more." },
  ];
};

const faqs = [
  {
    question: "How do I know which digital services are right for my business?",
    answer: "We start by understanding your business goals and target audience. From there, we recommend a combination of services that will help you achieve those goals. Whether you need more traffic, better conversion rates, or increased brand awareness, we tailor our approach to meet your specific needs."
  },
  {
    question: "How long does it take to see results from digital marketing?",
    answer: "Results vary depending on the service. PPC can deliver immediate traffic, while SEO and content marketing typically take a few months to show significant results. We continuously monitor and adjust our strategies to ensure you see measurable progress."
  },
  {
    question: "How do you measure success?",
    answer: "Success is measured through key performance indicators (KPIs) that align with your business objectives. For example, for SEO, it might be higher search rankings and increased organic traffic; for social media, it could be engagement rates and follower growth. We provide detailed reports to keep you informed of progress."
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

export default function DigitalServices() {
  return (
    <motion.div 
      className="container mx-auto px-4 py-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 className="text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" variants={itemVariants}>
        General Digital Services
      </motion.h1>
      <motion.p className="mb-6 text-xl text-center max-w-3xl mx-auto" variants={itemVariants}>
        In the modern business landscape, having a strong digital presence is essential, but it goes beyond just having a website. At Peak Growth Digital, we offer a wide range of general digital services designed to enhance your brand's online visibility, increase traffic, and ultimately drive conversions.
      </motion.p>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12" variants={itemVariants}>
        <div className="bg-base-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">What Are General Digital Services?</h2>
          <p>
            General digital services encompass a broad spectrum of online marketing techniques and strategies aimed at improving your brand's digital footprint. Our offerings are designed to help businesses grow by leveraging the power of the internet to attract and engage customers.
          </p>
        </div>
        <div className="bg-base-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Our Services?</h2>
          <ul className="list-disc list-inside">
            <li><strong>Comprehensive Digital Growth:</strong> Cover all aspects of online marketing</li>
            <li><strong>Customized Strategies:</strong> Tailored to your business needs and goals</li>
            <li><strong>Ongoing Support:</strong> Continuous optimization for best results</li>
            <li><strong>Measurable Results:</strong> Detailed reporting on key performance indicators</li>
          </ul>
        </div>
      </motion.div>

      <motion.h2 className="text-3xl font-semibold mt-12 mb-6 text-center" variants={itemVariants}>Our Core Digital Services</motion.h2>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" variants={itemVariants}>
        {[
          { title: "Search Engine Optimization (SEO)", icon: "🔍", description: "Improve your website's visibility in search results" },
          { title: "Content Marketing", icon: "📝", description: "Create and distribute valuable, relevant content" },
          { title: "Social Media Management", icon: "📱", description: "Engage with your audience across social platforms" },
          { title: "Pay-Per-Click (PPC) Advertising", icon: "💰", description: "Drive immediate traffic through targeted ads" },
          { title: "Email Marketing", icon: "📧", description: "Nurture leads and build customer relationships" },
          { title: "Online Reputation Management", icon: "⭐", description: "Monitor and improve your online reputation" },
        ].map((service, index) => (
          <div key={index} className="bg-base-200 p-6 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </motion.div>

      <motion.h2 className="text-3xl font-semibold mt-12 mb-6 text-center" variants={itemVariants}>How Our Services Work Together</motion.h2>
      <motion.p className="mb-6 text-center" variants={itemVariants}>
        Each digital service complements the others, creating a comprehensive digital marketing strategy. When used together, these services create a holistic approach to growing your online presence and driving business success.
      </motion.p>

      <motion.h2 className="text-3xl font-semibold mt-12 mb-6 text-center" variants={itemVariants}>Common Questions</motion.h2>
      <motion.div variants={itemVariants}>
        <FAQSection faqs={faqs} />
      </motion.div>
      
      <motion.div className="mt-12 text-center" variants={itemVariants}>
        <Link to="/contact" className="btn btn-primary btn-lg">Start Your Digital Growth Journey</Link>
      </motion.div>
    </motion.div>
  );
}