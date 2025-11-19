'use client';

import dynamic from 'next/dynamic';

const ServiceContent = dynamic(() => import('./ServiceContent'), { ssr: false });

export default function Page() {
  return <ServiceContent />;
}
