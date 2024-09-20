import type { MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion";
import JsonLd from "~/components/JsonLd";

export const meta: MetaFunction = () => {
  return [
    { title: "About Peak Growth Digital - Your Digital Growth Partner" },
    { name: "description", content: "Learn about Peak Growth Digital, our mission, and how we help businesses grow their online presence through innovative digital marketing strategies." },
  ];
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const jsonLdData = {
    "@type": "Organization",
    name: "Peak Growth Digital",
    description: "Peak Growth Digital is your partner in achieving online success. We specialize in website ranking, renting, creation, Google Business Profile (GBP) ranking, and a wide range of digital services.",
    url: "https://peakgrowthdigital.com/about",
  };

  return (
    <>
      <JsonLd data={jsonLdData} />
      <motion.div
        className="container mx-auto px-4 py-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 className="text-4xl font-bold mb-6" variants={itemVariants}>About Peak Growth Digital</motion.h1>
        <motion.p className="mb-4" variants={itemVariants}>Peak Growth Digital is your partner in achieving online success. We specialize in website ranking, renting, creation, Google Business Profile (GBP) ranking, and a wide range of digital services.</motion.p>
        
        <motion.h2 className="text-2xl font-semibold mt-8 mb-4" variants={itemVariants}>Our Mission</motion.h2>
        <motion.p className="mb-4" variants={itemVariants}>Our mission is to empower businesses of all sizes to thrive in the digital landscape. We combine cutting-edge technology with proven strategies to deliver measurable results for our clients.</motion.p>
        
        <motion.h2 className="text-2xl font-semibold mt-8 mb-4" variants={itemVariants}>Our Services</motion.h2>
        <motion.ul className="list-disc list-inside mb-4" variants={itemVariants}>
          <li>Website Ranking: Improve your search engine visibility and drive organic traffic</li>
          <li>Website Renting: Get a high-performing website without the upfront costs</li>
          <li>Website Creation: Custom-designed websites tailored to your business needs</li>
          <li>GBP Ranking: Boost your local presence and attract nearby customers</li>
          <li>Digital Marketing: Comprehensive strategies to grow your online presence</li>
        </motion.ul>
        
        <motion.h2 className="text-2xl font-semibold mt-8 mb-4" variants={itemVariants}>Why Choose Us?</motion.h2>
        <motion.ul className="list-disc list-inside mb-4" variants={itemVariants}>
          <li>Expertise: Our team of digital marketing professionals stays up-to-date with the latest trends and best practices</li>
          <li>Customized Solutions: We tailor our services to meet your unique business goals and challenges</li>
          <li>Transparent Reporting: Regular updates and detailed reports keep you informed about your campaign's progress</li>
          <li>Proven Results: Our track record of success speaks for itself, with numerous satisfied clients across various industries</li>
          <li>Ongoing Support: We're committed to your long-term success and provide continuous support and optimization</li>
        </motion.ul>
        
        <motion.p className="mt-8" variants={itemVariants}>Ready to take your online presence to the next level? <a href="/contact" className="text-primary hover:underline">Contact us</a> today to learn how we can help your business grow.</motion.p>
      </motion.div>
    </>
  );
}