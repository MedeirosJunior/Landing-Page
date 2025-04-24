"use client";

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <div className="whatsapp-container">
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-icon"
        aria-label="Entre em contato via WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default WhatsAppButton; 