import React from 'react';
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import FAQSection from '~/components/FAQSection';

export const meta: MetaFunction = () => {
  return [
    { title: "Website Renting Services - Peak Growth Digital" },
    { name: "description", content: "Rent high-ranking websites to generate leads and drive sales without the time investment of building a new site. Learn about our website renting services." },
  ];
};

const faqs = [
  {
    question: "Is website renting cost-effective?",
    answer: "Yes! Website renting is often much more affordable than building and promoting a new site from scratch. You only pay for the time you rent the site, saving you the costs of ongoing SEO and development."
  },
  {
    question: "Can I customize the rented website?",
    answer: "Absolutely. Although the site is pre-built, we offer customization options, including adding your logo, updating content, and changing design elements to suit your brand's needs."
  },
  {
    question: "How is website renting different from buying a website?",
    answer: "When you rent a website, you lease it for a specific period, benefiting from its established traffic and rankings. Buying a website gives you full ownership, but you'll also have to manage the site and handle its SEO maintenance, which can be costly."
  },
  {
    question: "What happens to the site after the rental period ends?",
    answer: "Once your rental period ends, you can either extend the lease or transition to your own site. If you choose to build your own site, we can help transfer the traffic and rankings to your new platform."
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

export default function WebsiteRenting() {
  return (
    <motion.div 
      className="container mx-auto px-4 py-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 className="text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" variants={itemVariants}>
        Website Renting
      </motion.h1>
      <motion.p className="mb-6 text-xl text-center max-w-3xl mx-auto" variants={itemVariants}>
        In a rapidly evolving digital marketplace, waiting to build an online presence from scratch can feel like a slow process. That's where Website Renting comes in.
      </motion.p>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12" variants={itemVariants}>
        <div className="bg-base-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">What is Website Renting?</h2>
          <p>
            Website renting allows businesses to lease websites that are already fully functional and optimized for search engines. These websites are pre-built, well-maintained, and rank highly for specific keywords relevant to your industry.
          </p>
        </div>
        <div className="bg-base-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Who Can Benefit?</h2>
          <ul className="list-disc list-inside">
            <li><strong>New Businesses:</strong> Instant online presence</li>
            <li><strong>Market Testers:</strong> Cost-effective way to test new markets</li>
            <li><strong>Budget-Conscious:</strong> Avoid high upfront costs</li>
            <li><strong>Time-Sensitive:</strong> Quick setup without long development</li>
          </ul>
        </div>
      </motion.div>

      <motion.h2 className="text-3xl font-semibold mt-12 mb-6 text-center" variants={itemVariants}>How Website Renting Works</motion.h2>
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" variants={itemVariants}>
        {[
          { title: "Selection", icon: "🔍", description: "Choose a site that aligns with your business" },
          { title: "Customization", icon: "🎨", description: "Adjust the site to reflect your brand" },
          { title: "Instant Traffic", icon: "🚀", description: "Start receiving visitors immediately" },
          { title: "Maintenance", icon: "🔧", description: "We handle all technical aspects" },
          { title: "Analytics", icon: "📊", description: "Track performance and adjust strategy" },
          { title: "Flexibility", icon: "🔄", description: "Extend or transition as needed" },
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
        <Link to="/contact" className="btn btn-primary btn-lg">Start Website Renting</Link>
      </motion.div>
    </motion.div>
  );
}