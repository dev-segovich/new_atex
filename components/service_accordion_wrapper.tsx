'use client';

import dynamic from 'next/dynamic';

const ServiceAccordion = dynamic(() => import('./serviceaccordion'), { ssr: false });

export default function ServiceAccordionWrapper() {
  return <ServiceAccordion />;
}
