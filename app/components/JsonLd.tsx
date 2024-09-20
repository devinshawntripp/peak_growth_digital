import React from 'react';
import { useLocation } from "@remix-run/react";

interface JsonLdProps {
  data: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
  const location = useLocation();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: `https://peakgrowthdigital.com${location.pathname}`,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}