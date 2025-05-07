"use client";

import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import '../styles/social-icons.css'; // Mantém o CSS personalizado

const locations = [
  {
    title: "Nosso endereço:",
    address: "Rua das Flores, Nº 123",
    city: "Belo Horizonte / MG - 31000-000",
    phone: "(31)99999-9999"
  }
];

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row g-4">
          {/* Coluna 1 - Logo e Descrição */}
          <div id="footer" className="col-md-4">
            <h3 className="text-uppercase fw-bold mb-4">Consultoria Especializada</h3>
            <p className="text-muted">
              Ajudamos você a tomar as melhores decisões para sua obra. 
            </p>
            {locations.map((location, index) => (
              <div key={index} className="mt-4">
                <p className="fw-bold">{location.title}</p>
                <p>{location.address}</p>
                <p>{location.city}</p>
                <p className="mt-2">
                  <a
                    href={`tel:${location.phone}`}
                    className="text-light text-decoration-none"
                    aria-label={`Ligar para ${location.phone}`}
                  >
                    {location.phone}
                  </a>
                </p>
              </div>
            ))}
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div className="col-md-4">
            <h3 className="text-uppercase fw-bold mb-4">Links Rápidos</h3>
            <nav className="d-flex flex-column">
              <Link href="/" className="text-muted text-decoration-none mb-2">
                Início
              </Link>              
              <Link href="/servicos" className="text-muted text-decoration-none mb-2">
                Serviços
              </Link>
              <Link href="/contato" className="text-muted text-decoration-none mb-2">
                Contato
              </Link>
            </nav>
          </div>

          {/* Coluna 3 - Redes Sociais */}
          <div className="col-md-4">
            <h3 className="text-uppercase fw-bold mb-4">Redes Sociais</h3>
            <div className="d-flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=100093201491471"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visite nossa página no Facebook"
                className="social-link facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/consultoriafinanceira.oficial/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Siga-nos no Instagram"
                className="social-link instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Entre em contato via WhatsApp"
                className="social-link whatsapp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-5 pt-4 border-top border-secondary text-center">
          <p className="text-muted mb-0">
            © {new Date().getFullYear()} JR-info-System. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;