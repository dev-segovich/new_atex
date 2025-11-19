'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface ServiceSection {
  title: string;
  subtitle: string;
  items: string[];
}

export default function ServiceAccordion() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const serviceData = t('serviceAccordion.sections', { returnObjects: true }) as ServiceSection[];

  return (
    <div className="space-y-4">
      {serviceData.map((section, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg shadow-sm overflow-hidden"
        >
          <button
            onClick={() => toggleIndex(index)}
            className="w-full text-left px-6 py-4 bg-gray-100 hover:bg-gray-200 font-semibold text-lg text-[#364350] flex justify-between items-center"
          >
            {section.title}
            <span className="ml-2 text-xl">{activeIndex === index ? '−' : '+'}</span>
          </button>
          <div
            className={`transition-all duration-300 ease-in-out px-6 overflow-hidden ${
              activeIndex === index ? 'max-h-screen py-4' : 'max-h-0'
            }`}
          >
            <h2 className="font-semibold text-md mb-2 text-[#364350]">
              {section.subtitle}
            </h2>
            <ul className="list-disc list-inside space-y-2">
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            {index === 5 && (
              <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-sm text-yellow-900 rounded">
                <strong>{t('serviceAccordion.note.label')}</strong> {t('serviceAccordion.note.text')}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
