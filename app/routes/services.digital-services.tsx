import React from 'react';
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import FAQSection from '~/components/FAQSection';

export const meta: MetaFunction = () => {
  return [
    { title: "Digital Services - Peak Growth Digital" },
    { name: "description", content: "Comprehensive digital services to boost your online presence. From SEO to social media management, we've got you covered." },
  ];
};

const faqs = [
  {
    question: "What digital services do you offer?",
    answer: "We offer a wide range of digital services including SEO, content marketing, social media management, email marketing, PPC advertising, web design and development, and more."
  },
  {
    question: "How long does it take to see results from digital marketing efforts?",
    answer: "The timeline for results can vary depending on the specific service and your current digital presence. Some efforts, like PPC, can show immediate results, while others like SEO may take 3-6 months to show significant improvements."
  },
  {
    question: "Do you offer customized digital marketing strategies?",
    answer: "Yes, we create tailored digital marketing strategies based on your business goals, target audience, and industry. We believe in a personalized approach for maximum effectiveness."
  },
  {
    question: "How do you measure the success of your digital services?",
    answer: "We use various metrics depending on the service, including website traffic, conversion rates, engagement rates, search engine rankings, and ROI. We provide regular reports to keep you informed of progress."
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
      className="container mx-auto px-4 py-8 sm:py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" variants={itemVariants}>
        Digital Services
      </motion.h1>
      <motion.p className="mb-8 text-xl sm:text-3xl text-center max-w-3xl mx-auto" variants={itemVariants}>
        Elevate your online presence with our comprehensive digital services. We offer tailored solutions to help your business thrive in the digital landscape.
      </motion.p>

      <motion.div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 my-12" variants={itemVariants}>
        <div className="bg-base-200 p-6 sm:p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-5xl font-semibold mb-4 sm:mb-6">Our Expertise</h2>
          <p className="text-lg sm:text-3xl">
            From search engine optimization to social media management, we offer a full suite of digital services designed to boost your online visibility, engage your audience, and drive conversions.
          </p>
        </div>
        <div className="bg-base-200 p-6 sm:p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Why Choose Our Digital Services?</h2>
          <ul className="list-disc list-inside text-lg sm:text-3xl space-y-2">
            <li>Tailored strategies for your unique business needs</li>
            <li>Comprehensive approach covering all aspects of digital marketing</li>
            <li>Data-driven decision making and continuous optimization</li>
            <li>Transparent reporting and communication</li>
          </ul>
        </div>
      </motion.div>

      <motion.h2 className="text-3xl sm:text-4xl font-semibold mt-12 sm:mt-16 mb-8 sm:mb-10 text-center" variants={itemVariants}>Our Digital Services</motion.h2>
      <motion.div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16" variants={itemVariants}>
        {[
          { title: "Search Engine Optimization (SEO)", icon: "🔍", description: "Improve your website's visibility in search results" },
          { title: "Content Marketing", icon: "📝", description: "Create and distribute valuable, relevant content" },
          { title: "Social Media Management", icon: "📱", description: "Engage your audience across social platforms" },
          { title: "Email Marketing", icon: "📧", description: "Build relationships and drive conversions" },
          { title: "PPC Advertising", icon: "💰", description: "Targeted ads for immediate visibility and traffic" },
          { title: "Web Design & Development", icon: "🖥️", description: "Create stunning, functional websites" },
        ].map((service, index) => (
          <div key={index} className="bg-base-200 p-6 sm:p-8 rounded-lg shadow-lg text-center">
            <div className="text-4xl sm:text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl sm:text-4xl font-semibold mb-3 sm:mb-4">{service.title}</h3>
            <p className="text-base sm:text-4xl">{service.description}</p>
          </div>
        ))}
      </motion.div>

      <motion.h2 className="text-3xl sm:text-4xl font-semibold mt-12 sm:mt-16 mb-8 sm:mb-10 text-center" variants={itemVariants}>Our Process</motion.h2>
      <motion.div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16" variants={itemVariants}>
        {[
          { title: "1. Analysis", description: "We start by thoroughly analyzing your current digital presence and identifying opportunities for improvement." },
          { title: "2. Strategy Development", description: "Based on our analysis, we create a customized digital strategy tailored to your business goals." },
          { title: "3. Implementation", description: "We put our plan into action, implementing various digital marketing tactics across chosen channels." },
          { title: "4. Monitoring & Optimization", description: "We continuously monitor performance and make data-driven adjustments to optimize results." },
        ].map((step, index) => (
          <div key={index} className="bg-base-200 p-6 sm:p-8 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-4xl font-semibold mb-2 sm:mb-4">{step.title}</h3>
            <p className="text-base sm:text-4xl">{step.description}</p>
          </div>
        ))}
      </motion.div>

      <motion.h2 className="text-3xl sm:text-4xl font-semibold mt-12 sm:mt-16 mb-8 sm:mb-10 text-center" variants={itemVariants}>Frequently Asked Questions</motion.h2>
      <motion.div variants={itemVariants}>
        <FAQSection faqs={faqs} />
      </motion.div>
      
      <motion.div className="mt-12 sm:mt-16 text-center" variants={itemVariants}>
        <Link to="/contact" className="btn btn-primary btn-lg text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4">Get Started with Digital Services</Link>
      </motion.div>
    </motion.div>
  );
}