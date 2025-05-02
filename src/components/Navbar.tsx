"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import "../styles/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Detecta o scroll para alterar o estilo da navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fecha o menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        event.target instanceof Element &&
        !event.target.closest(".navbar-collapse") &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top transition-all ${
        isScrolled ? "bg-dark" : "bg-transparent"
      }`}
    >
      <div className="container">
        {/* Logo */}
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <span className="h4 mb-0">Vivian Nunes</span>
          <span className="ms-2 small text-uppercase">Consultoria</span>
        </Link>

        {/* Botão de colapso */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links de navegação */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto text-uppercase">
            <li className={`nav-item ${pathname === "/" ? "active" : ""}`}>
              <Link
                href="/"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Início
              </Link>
            </li>
            <li className={`nav-item ${pathname === "/sobre" ? "active" : ""}`}>
              <Link
                href="/sobre"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Sobre
              </Link>
            </li>
            <li className={`nav-item ${pathname === "/cursos" ? "active" : ""}`}>
              <Link
                href="/cursos"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Cursos
              </Link>
            </li>
            <li
              className={`nav-item ${pathname === "/contato" ? "active" : ""}`}
            >
              <Link
                href="/contato"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="#footer"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Fale Conosco
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;