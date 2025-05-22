'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

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
          <Image src="/img/Atex con Slogan.webp" alt="ATEX Logo" width={160} height={40} className="logo-navbar" />
        </Link>
        <button className="menu-toggle" onClick={toggleMenu}>☰</button>
      </div>
      <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={toggleMenu}>×</button>
        <ul>
          <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link href="/services" onClick={toggleMenu}>Services</Link></li>
          <li><Link href="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link href="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
