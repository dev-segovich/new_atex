'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';

const AboutContent = dynamic(() => import('./aboutContent'), { ssr: false });

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    window.dispatchEvent(new Event('resetSection'));
  }, []);

  return <AboutContent />;
}
