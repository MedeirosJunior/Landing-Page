"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import "../styles/navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Estado do menu colapsado
  const pathname = usePathname();

  // Detecta o scroll para alterar o estilo da navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top transition-all ${isScrolled ? "bg-dark" : "bg"
        }`}
    >
      <div className="container">
        {/* Logo */}
        <Link href="/" className="navbar-brand text-uppercase fw-bold">
          Vivian Nunes Consultoria
        </Link>

        {/* Links de navegação (antes do botão de colapso) */}
        <ul className="navbar-nav ms-auto text-uppercase d-none d-lg-flex">
          <li className={`nav-item ${pathname === "/servicos" ? "active" : ""}`}>
            <Link href="/servicos" className="nav-link">
              <i className="bi bi-camera" style={{ fontSize: "24px" }}></i>
              <div>Serviços</div>
            </Link>
          </li>
          <li className={`nav-item ${pathname === "/contato" ? "active" : ""}`}>
            <Link href="/contato" className="nav-link">
              <i className="bi bi-envelope" style={{ fontSize: "24px" }}></i>
              <div>Contato</div>
            </Link>
          </li>
          <li className={`nav-item ${pathname === "/sobre" ? "active" : ""}`}>
            <Link href="#footer" className="nav-link">
              <i className="bi bi-lightbulb" style={{ fontSize: "24px" }}></i>
              <div>Sobre</div>
            </Link>
          </li>
        </ul>

        {/* Botão de colapso */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links de navegação (dentro do colapso para telas menores) */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto text-uppercase">
            <li className={`nav-item ${pathname === "/servicos" ? "active" : ""}`}>
              <Link href="/servicos" className="nav-link" onClick={() => setIsOpen(false)}>
                <i className="bi bi-camera" style={{ fontSize: "24px" }}></i>
                <div>Serviços</div>
              </Link>
            </li>
            <li className={`nav-item ${pathname === "/contato" ? "active" : ""}`}>
              <Link href="/contato" className="nav-link" onClick={() => setIsOpen(false)}>
                <i className="bi bi-envelope" style={{ fontSize: "24px" }}></i>
                <div>Contato</div>
              </Link>
            </li>
            <li className={`nav-item ${pathname === "/sobre" ? "active" : ""}`}>
              <Link href="#footer" className="nav-link" onClick={() => setIsOpen(false)}>
                <i className="bi bi-lightbulb" style={{ fontSize: "24px" }}></i>
                <div>Sobre</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;