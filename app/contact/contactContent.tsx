'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function ContactContent() {
  const { t } = useTranslation();
  const [showOtherType, setShowOtherType] = useState(false);
  const [showOtherRegion, setShowOtherRegion] = useState(false);

  const investorTypes = t('contactPage.investorTypes', { returnObjects: true }) as string[];
  const regions = t('contactPage.regions', { returnObjects: true }) as string[];
  const interests = t('contactPage.interests', { returnObjects: true }) as string[];

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };

  return (
    <div className="min-h-screen bg-[#f9fbfc] text-[#364350]">
      <section className="relative w-full h-[60vh] overflow-hidden">
        <img
          src="/img/a6.webp"
          alt=""
          className="brightness-[0.7] w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-white">{t('contactPage.title')}</h1>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-6 text-center text-[#364350]">{t('contactPage.subtitle')}</h2>
        <p className="text-center text-md text-gray-600 mb-10 whitespace-pre-line">
          {t('contactPage.intro')}
        </p>

        <form
          action="https://atexgrp.com/submit.php"
          method="POST"
          encType="multipart/form-data"
          className="space-y-6 bg-white p-8 rounded-lg shadow-lg border border-gray-200"
        >
          <h3 className="text-xl font-semibold mb-2">1. {t('contactPage.sections.basic')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="full_name" className="block mb-2 font-semibold text-sm">{t('contactPage.labels.fullName')}</label>
              <input id="full_name" name="full_name" type="text" required className={inputStyle} />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-semibold text-sm">{t('contactPage.labels.email')}</label>
              <input id="email" name="email" type="email" required className={inputStyle} />
            </div>
          </div>

          <label htmlFor="phone" className="block mb-2 font-semibold text-sm">{t('contactPage.labels.phone')}</label>
          <input id="phone" name="phone" type="text" className={inputStyle} />

          <label htmlFor="entity_name" className="block mb-2 font-semibold text-sm">{t('contactPage.labels.entity')}</label>
          <input id="entity_name" name="entity_name" type="text" className={inputStyle} />

          <fieldset className="mt-8">
            <legend className="text-xl font-semibold mb-2">2. {t('contactPage.sections.type')}</legend>
            <div className="space-y-2">
              {investorTypes.map((type, i) => (
                <label key={i} htmlFor={`investor_${i}`} className="block">
                  <input id={`investor_${i}`} type="checkbox" name="investorType[]" value={type} className="mr-2" />
                  {type}
                </label>
              ))}
              <label htmlFor="investor_other" className="block">
                <input
                  id="investor_other"
                  type="checkbox"
                  name="investorType[]"
                  value="Other"
                  onChange={(e) => setShowOtherType(e.target.checked)}
                  className="mr-2"
                />
                {t('contactPage.labels.other')}
              </label>
              {showOtherType && (
                <input
                  id="investorTypeOther"
                  type="text"
                  name="investorTypeOther"
                  placeholder={t('contactPage.placeholders.otherType')}
                  className={inputStyle}
                />
              )}
            </div>
          </fieldset>

          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-2">3. {t('contactPage.sections.accreditation')}</h3>

            <div className="space-y-2">
              <label className="block">
                <input
                  type="radio"
                  name="accreditation_status"
                  value="yes"
                  className="mr-2"
                  onChange={handleChange}
                  required
                />
                {t('contactPage.labels.accredited')}
              </label>


              <label className="block">
                <input
                  type="radio"
                  name="accreditation_status"
                  value="unknown"
                  className="mr-2"
                  onChange={handleChange}
                />
                {t('contactPage.labels.unknown')}
              </label>
            </div>

            {status === 'yes' && (
              <div className="mt-4 transition-all">
                <label htmlFor="accreditation_file" className="block font-semibold text-sm mt-4 mb-2">
                  {t('contactPage.labels.upload')}
                </label>
                <input
                  id="accreditation_file"
                  type="file"
                  name="accreditation_file"
                  accept=".pdf"
                  className={fileInputStyle}
                />

                <label htmlFor="accreditation_link" className="block font-semibold text-sm mt-4 mb-2">
                  {t('contactPage.labels.orLink')}
                </label>
                <input
                  id="accreditation_link"
                  type="url"
                  name="accreditation_link"
                  placeholder="https://docum.com"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#364350]"
                />
              </div>
            )}
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-2">4. {t('contactPage.sections.region')}</h3>
          <select
            id="region"
            name="region"
            required
            onChange={(e) => setShowOtherRegion(e.target.value === 'Other')}
            className={inputStyle}
          >
            <option value="">{t('contactPage.placeholders.selectOption')}</option>
            {Object.entries(regions).map(([key, label]) => (
                <option key={key} value={label}>{label}</option>
            ))}
          </select>
          {showOtherRegion && (
            <input
              id="region_other"
              type="text"
              name="region_other"
              placeholder={t('contactPage.placeholders.otherRegion')}
              className={`${inputStyle} mt-2`}
            />
          )}

          <h3 className="text-xl font-semibold mt-8 mb-2">5. {t('contactPage.sections.minimum')}</h3>
          <label htmlFor="minimumInvestment" className="block">
            <input id="minimumInvestment" type="checkbox" name="minimumInvestment" value="1" className="mr-2" required />
            {t('contactPage.labels.minimumInvestment')}
          </label>

          <fieldset className="mt-8">
            <legend className="text-xl font-semibold mb-2">6. {t('contactPage.sections.interests')}</legend>
            <div className="space-y-2">
              {interests.map((interest, i) => (
                <label key={i} htmlFor={`interest_${i}`} className="block">
                  <input id={`interest_${i}`} type="checkbox" name="interests[]" value={interest} className="mr-2" />
                  {interest}
                </label>
              ))}
            </div>
          </fieldset>

          <h3 className="text-xl font-semibold mt-8 mb-2">7. {t('contactPage.sections.referral')}</h3>
          <textarea
            id="referralSource"
            name="referralSource"
            rows={2}
            placeholder={t('contactPage.placeholders.referral')}
            className={inputStyle}
          />

          <h3 className="text-xl font-semibold mt-8 mb-2">8. {t('contactPage.sections.message')}</h3>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder={t('contactPage.placeholders.message')}
            className={inputStyle}
          />

          <p className="text-sm text-gray-600 italic mt-6 whitespace-pre-line">
            <strong>{t('contactPage.disclaimer.label')}</strong>{t('contactPage.disclaimer.text')}
          </p>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-[#364350] text-white px-6 py-3 rounded hover:bg-[#2e3a44] transition"
            >
              {t('contactPage.submit')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ✅ Clases reutilizables
const inputStyle =
  'w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#364350]';

const fileInputStyle =
  'w-full px-3 py-2 border mb-2 border-gray-300 rounded cursor-pointer bg-white text-sm file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-[#364350] file:text-white hover:file:bg-[#2e3a44]';
