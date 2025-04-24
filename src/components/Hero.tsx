"use client";

import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-white py-20">
      <div className="relative container mx-auto px-4 h-screen flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Vivian Nunes
            <br />
            Consultoria
            <br />
            Especializada
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-8">
            Transformando vidas através do desenvolvimento pessoal e profissional
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Oferecemos soluções personalizadas para o seu crescimento, com foco em resultados 
            práticos e transformação real. Nossa missão é potencializar o seu sucesso.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition-colors">
            Agende uma consultoria
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero; 