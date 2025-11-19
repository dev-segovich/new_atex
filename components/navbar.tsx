'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import '../i18n'; // Ajusta la ruta si es necesario

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { t, i18n } = useTranslation('common');

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    let lastScrollTop = 0;
    const onScroll = () => {
      const currentScroll = window.scrollY;
      setHidden(currentScroll > lastScrollTop);
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  return (
    <nav className={`navbar ${hidden ? 'hide' : ''}`}>
      <div className="navbar-container">
        <Link href="/" className="logo-link">
          <Image
            src="/img/Atex con Slogan.webp"
            alt="ATEX Logo"
            width={160}
            height={40}
            className="logo-navbar"
          />
        </Link>

        <div className="nav-controls" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Botón menú */}
          <button className="menu-toggle" onClick={toggleMenu}>☰</button>
        </div>
      </div>

      <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={toggleMenu}>×</button>
        <ul>
          <li><Link href="/" onClick={toggleMenu}>{t('home')}</Link></li>
          <li><Link href="/services" onClick={toggleMenu}>{t('services')}</Link></li>
          <li><Link href="/about" onClick={toggleMenu}>{t('about')}</Link></li>
          {/* <li><Link href="/strategy" onClick={toggleMenu}>{t('strategy')}</Link></li> */}
          <li><Link href="/contact" onClick={toggleMenu}>{t('contact')}</Link></li>
          <li>
            {/* Selector de idioma con ícono */}
            <div className="language-switcher">
              <span role="img" aria-label="language" className="language-icon">🌐</span>
              <select
                onChange={(e) => changeLanguage(e.target.value)}
                value={i18n.language}
                className="language-select"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
            </div>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
