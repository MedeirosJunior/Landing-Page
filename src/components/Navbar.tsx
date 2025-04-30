"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && !target.closest('.navbar-collapse') && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top transition-all duration-300 ${isScrolled ? 'bg-dark' : 'bg-dark-transparent'
      }`}>
      <div className="container">
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <span className="h4 mb-0">Vivian Nunes</span>
          <span className="ms-2 small text-uppercase">Consultoria</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto text-uppercase">
            <li className="nav-item">
              <Link href="/" className="nav-link" onClick={() => setIsOpen(false)}>Início</Link>
            </li>
            <li className="nav-item">
              <Link href="/sobre" className="nav-link" onClick={() => setIsOpen(false)}>Sobre</Link>
            </li>
            <li className="nav-item">
              <Link href="/cursos" className="nav-link" onClick={() => setIsOpen(false)}>Cursos</Link>
            </li>
            <li className="nav-item">
              <Link href="/contato" className="nav-link" onClick={() => setIsOpen(false)}>Contato</Link>
            </li>
            <li className="nav-item">
              <Link href="#footer" className="nav-link" onClick={() => setIsOpen(false)}>Fale Conosco</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;