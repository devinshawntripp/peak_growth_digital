import React from 'react';
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import FAQSection from '~/components/FAQSection';

export const meta: MetaFunction = () => {
  return [
    { title: "Website Creation Services - Peak Growth Digital" },
    { name: "description", content: "Custom website design and development tailored to your business objectives. Learn about our website creation services and how we can build your perfect online presence." },
  ];
};

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer: "On average, a custom website can take anywhere from 4 to 8 weeks to complete, depending on the complexity of the design and features. We work closely with you throughout the process to ensure it meets your timeline."
  },
  {
    question: "What is the cost of creating a custom website?",
    answer: "The cost of a custom website varies based on the features and functionality you need. At Peak Growth Digital, we offer flexible pricing plans to fit your budget while still delivering a high-quality product."
  },
  {
    question: "Can I update the website on my own?",
    answer: "Yes! We build websites with user-friendly content management systems (CMS) like WordPress, making it easy for you to make updates to your content or add new features without needing technical expertise."
  },
  {
    question: "What happens after the website is launched?",
    answer: "After your website is launched, we offer ongoing maintenance and support. This includes regular updates, security monitoring, and SEO enhancements to keep your site performing at its best."
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

export default function WebsiteCreation() {
  return (
    <motion.div 
      className="container mx-auto px-4 py-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 className="text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" variants={itemVariants}>
        Website Creation
      </motion.h1>
      <motion.p className="mb-6 text-xl text-center max-w-3xl mx-auto" variants={itemVariants}>
        Your website is the digital storefront of your business—it's often the first impression potential customers have of you. At Peak Growth Digital, we craft custom websites that not only look stunning but are also built to perform.
      </motion.p>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12" variants={itemVariants}>
        <div className="bg-base-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">What is Website Creation?</h2>
          <p>
            Website creation involves the design and development of a website tailored to your business's unique needs. We take care of everything from the initial concept to the final deployment, ensuring that your website is both visually appealing and functionally sound.
          </p>
        </div>
        <div className="bg-base-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Why Is a Custom Website Important?</h2>
          <ul className="list-disc list-inside">
            <li><strong>Unique Branding:</strong> Reflect your brand's identity</li>
            <li><strong>Optimized for Conversions:</strong> Designed to convert visitors into customers</li>
            <li><strong>Mobile-Friendly:</strong> Responsive design for all devices</li>
          </ul>
        </div>
      </motion.div>

      <motion.h2 className="text-3xl font-semibold mt-12 mb-6 text-center" variants={itemVariants}>Our Website Creation Process</motion.h2>
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" variants={itemVariants}>
        {[
          { title: "Discovery", icon: "🔍", description: "We learn about your business, goals, and target audience" },
          { title: "Design", icon: "🎨", description: "Our team creates a custom mockup reflecting your brand identity" },
          { title: "Development", icon: "💻", description: "We bring the design to life with clean, efficient code" },
          { title: "Content", icon: "📝", description: "We create or optimize content for SEO and engagement" },
          { title: "Testing", icon: "🧪", description: "Rigorous testing ensures a seamless user experience" },
          { title: "Launch", icon: "🚀", description: "We deploy your site and provide ongoing support" },
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

      <motion.h2 className="text-3xl font-semibold mt-12 mb-6 text-center" variants={itemVariants}>Benefits of Custom Website Creation</motion.h2>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12" variants={itemVariants}>
        {[
          { title: "Tailored to Your Needs", description: "We build sites designed to meet your specific business goals" },
          { title: "SEO-Friendly", description: "Built with search engine optimization in mind from the ground up" },
          { title: "Scalable", description: "Grow your website as your business expands" },
          { title: "User-Centric Design", description: "Prioritize user experience for better engagement and conversions" },
        ].map((benefit, index) => (
          <div key={index} className="bg-base-200 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </motion.div>
      
      <motion.div className="mt-12 text-center" variants={itemVariants}>
        <Link to="/contact" className="btn btn-primary btn-lg">Start Your Website Project</Link>
      </motion.div>
    </motion.div>
  );
}