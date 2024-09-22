import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechStart Solutions",
    text: "Peak Growth Digital transformed our online presence. Our traffic has increased by 200% since working with them!"
  },
  {
    name: "Michael Chen",
    company: "GreenLeaf Innovations",
    text: "Their expertise in SEO and digital marketing strategies has been invaluable to our business growth."
  },
  {
    name: "Emily Rodriguez",
    company: "Fitness Revolution",
    text: "We've seen a significant boost in client engagement and conversions thanks to Peak Growth Digital's social media management."
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-64 overflow-hidden w-full max-w-md mx-auto">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center p-6 bg-base-100 rounded-lg shadow-lg w-full">
            <p className="text-lg mb-4">"{testimonials[current].text}"</p>
            <p className="font-bold">{testimonials[current].name}</p>
            <p className="text-sm opacity-70">{testimonials[current].company}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}