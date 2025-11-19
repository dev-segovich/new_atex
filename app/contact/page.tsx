'use client';

import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const ContactContent = dynamic(() => import('./contactContent'), { ssr: false });

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    window.dispatchEvent(new Event('resetSection'));
  }, []);

  return <ContactContent />;
}
