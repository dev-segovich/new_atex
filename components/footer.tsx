'use client';
import Link from 'next/link';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import '../i18n';

const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <footer className="bg-[#f1f1f1] text-sm text-[#474747] py-6 px-4 mt-12 border-t">
      <div className="max-w-6xl mx-auto text-center">
        <p className="mb-2">
          &copy; {new Date().getFullYear()} {t('footer_rights')}
        </p>

        <p className="text-xs opacity-80 italic mb-4">
          {t('footer_disclaimer')}
          <Link href="/disclaimer" className="text-[#364350] hover:underline ml-1">
            {t('footer_view_disclaimer')}
          </Link>
        </p>

        <div className="flex justify-center items-center space-x-4">
          <a
            href="https://www.instagram.com/atex.group/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-[#364350]"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://www.linkedin.com/company/atexgrp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#364350]"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
