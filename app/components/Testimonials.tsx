import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    company: "Tech Innovators Inc.",
    text: "Peak Growth Digital transformed our online presence. Our website traffic has increased by 200% since working with them!"
  },
  {
    id: 2,
    name: "Jane Smith",
    company: "Local Business Solutions",
    text: "The team at Peak Growth Digital is incredibly knowledgeable and responsive. They've helped us dominate local search results."
  },
  {
    id: 3,
    name: "Mike Johnson",
    company: "E-commerce Experts",
    text: "Our e-commerce sales have skyrocketed thanks to Peak Growth Digital's SEO and digital marketing strategies."
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

export default function Testimonials() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {testimonials.map((testimonial) => (
        <motion.div key={testimonial.id} className="card bg-base-100 shadow-xl" variants={itemVariants}>
          <div className="card-body">
            <p className="mb-4">"{testimonial.text}"</p>
            <p className="font-bold">{testimonial.name}</p>
            <p className="text-sm">{testimonial.company}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}