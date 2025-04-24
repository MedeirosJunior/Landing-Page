"use client";

import React from 'react';
import Image from 'next/image';

const Consultoria = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold mb-6">NOSSOS SERVIÇOS</h2>
            <div className="w-20 h-1 bg-red-500 mb-8"></div>
            <p className="text-gray-700 text-lg mb-6">
              Oferecemos consultoria especializada em desenvolvimento pessoal e profissional, 
              com foco em transformação real e resultados duradouros. Nossa abordagem é 
              personalizada e adaptada às suas necessidades específicas.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <span className="text-red-500 mr-2">✓</span>
                Coaching individual e em grupo
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">✓</span>
                Mentoria profissional
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">✓</span>
                Desenvolvimento de liderança
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">✓</span>
                Treinamentos corporativos
              </li>
            </ul>
            <button className="bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition-colors">
              Conheça nossos serviços
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultoria; 