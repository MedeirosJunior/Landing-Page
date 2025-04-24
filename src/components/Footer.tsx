"use client";

import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import '../app/styles/social-icons.css';

const locations = [
  {
    title: "Belo Horizonte/MG",
    address: "Rua das Flores, 123",
    city: "Belo Horizonte, MG 31000-000",
    phone: "(31) 99999-9999"
  }  
];

const Footer = () => {
  return (
    <footer className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coluna 1 - Logo e Descrição */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4">Consultoria Financeira</h3>
            <p className="text-gray-300 text-center md:text-left">
              Ajudamos você a tomar as melhores decisões financeiras para seu futuro.
            </p>
            {locations.map((location, index) => (
              <div key={index} className="mt-4 text-gray-300">
                <p className="font-semibold">{location.title}</p>
                <p>{location.address}</p>
                <p>{location.city}</p>
                <p className="mt-2">
                  <a 
                    href={`tel:${location.phone}`}
                    className="hover:text-white transition-colors"
                    aria-label={`Ligar para ${location.phone}`}
                  >
                    {location.phone}
                  </a>
                </p>
              </div>
            ))}
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Início
              </Link>
              <Link href="/sobre" className="text-gray-300 hover:text-white transition-colors">
                Sobre
              </Link>
              <Link href="/servicos" className="text-gray-300 hover:text-white transition-colors">
                Serviços
              </Link>
              <Link href="/contato" className="text-gray-300 hover:text-white transition-colors">
                Contato
              </Link>
            </nav>
          </div>

          {/* Coluna 3 - Redes Sociais */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex gap-4 items-center">
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
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Consultoria Financeira. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 