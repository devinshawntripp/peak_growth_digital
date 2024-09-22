import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@remix-run/react';

export default function WebsiteRanking() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <motion.h1 
        className="text-4xl md:text-5xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Website Ranking Services
      </motion.h1>

      <motion.section 
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Boost Your Online Visibility</h2>
        <p className="text-lg mb-4">
          Our website ranking services are designed to improve your site's visibility in search engine results, 
          driving more organic traffic to your business.
        </p>
        <ul className="list-disc list-inside text-lg mb-4">
          <li>Comprehensive SEO audits</li>
          <li>Keyword research and optimization</li>
          <li>On-page and off-page SEO strategies</li>
          <li>Content optimization for search engines</li>
          <li>Regular performance reporting</li>
        </ul>
      </motion.section>

      <motion.section 
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-base-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">1. Analysis</h3>
            <p>We start by thoroughly analyzing your website and identifying areas for improvement.</p>
          </div>
          <div className="bg-base-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">2. Strategy</h3>
            <p>Based on our analysis, we develop a customized strategy to boost your rankings.</p>
          </div>
          <div className="bg-base-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">3. Implementation</h3>
            <p>We implement on-page and off-page SEO tactics to improve your site's performance.</p>
          </div>
          <div className="bg-base-200 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">4. Monitoring</h3>
            <p>We continuously monitor your site's performance and adjust our strategy as needed.</p>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ready to Improve Your Rankings?</h2>
        <p className="text-lg mb-6">
          Let's work together to boost your website's visibility and drive more organic traffic to your business.
        </p>
        <Link to="/contact" className="btn btn-primary btn-lg">
          Get Started
        </Link>
      </motion.section>
    </div>
  );
}