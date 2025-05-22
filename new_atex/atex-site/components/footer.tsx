import Link from 'next/link';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#f1f1f1] text-sm text-[#555] py-6 px-4 mt-12 border-t">
      <div className="max-w-6xl mx-auto text-center">
        <p className="mb-2">
          &copy; {new Date().getFullYear()} Atex Group. All rights reserved.
        </p>

        <p className="text-xs opacity-80 italic mb-4">
          Disclaimer: Content is for informational purposes only and does not constitute professional advice. Atex Group provides owner representation and advisory services; site supervision is performed by third-party experts. Images are owned by Atex or used with proper rights.
          <Link href="/disclaimer" className="text-[#364350] hover:underline ml-1">
            View full disclaimer
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
