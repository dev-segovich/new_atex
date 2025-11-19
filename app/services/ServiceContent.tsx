// app/services/ServiceContent.tsx
'use client';

import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import ServiceAccordionWrapper from '@/components/service_accordion_wrapper';
import '../../i18n'

export default function ServiceContent() {
  const { t } = useTranslation('common');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-white text-[#364350]">
      <section className="relative w-full h-[60vh] overflow-hidden">
        <img
          src="/img/21.webp"
          alt=""
          className="brightness-[0.7] w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            {t('service_title_main')}
          </h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {t('service_title_sub')}
        </h2>
        <p className="text-lg text-justify leading-relaxed">
          {t('service_paragraph_1')}
          <br /><br />
        {t('service_paragraph_2')}
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-20">
        <ServiceAccordionWrapper />
      </section>
    </main>
  );
}
