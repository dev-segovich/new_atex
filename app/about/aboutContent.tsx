'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function AboutContent() {
  const { t } = useTranslation('common');

  return (
    <div className="min-h-screen">
      <section className="relative w-full h-[60vh] overflow-hidden mb-16">
        <Image
          src="/img/16.webp"
          alt="About"
          width={1920}
          height={1080}
          className="brightness-[0.7] w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            {t('aboutPage.title')}
          </h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 text-lg text-justify leading-relaxed">
        <p className="mb-6" dangerouslySetInnerHTML={{ __html: t('aboutPage.description') }} />

        <h2 className="text-2xl font-semibold text-[#364350] mt-10 mb-6 text-center">
          {t('aboutPage.coreValues.title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
            {(t('aboutPage.coreValues.values', { returnObjects: true }) as { title: string; description: string }[]).map(
                (value, idx) => (
                <div
                    key={idx}
                    className="bg-white border-l-[4px] border-[#364350] p-4 shadow-sm rounded"
                >
                    <h3 className="text-lg font-semibold mb-2 text-[#364350]">
                    {value.title}
                    </h3>
                    <p>{value.description}</p>
                </div>
                )
            )}
        </div>

      </div>
    </div>
  );
}
