"use client";

import React from 'react';

const testimonials = [
  {
    text: "A Vivian Nunes Consultoria transformou completamente minha abordagem profissional. Os resultados foram além das minhas expectativas.",
    author: "ADRIANA SOUZA",
    role: "Gerente de RH"
  },
  {
    text: "O trabalho da Vivian Nunes foi fundamental para o crescimento da minha carreira. A metodologia aplicada é realmente transformadora.",
    author: "JOSÉ LUIS",
    role: "Empresário"
  },
  {
    text: "A experiência com a Vivian Nunes Consultoria foi excepcional. A didática e o acompanhamento personalizado fizeram toda a diferença.",
    author: "FERNANDO LIMA",
    role: "Universitário"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          DEPOIMENTOS
        </h2>
        <div className="w-24 h-1 bg-red-500 mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <p className="text-gray-700 mb-6">
                {testimonial.text}
              </p>
              <div>
                <div className="text-[#F7941D] font-bold">
                  {testimonial.author}
                </div>
                <div className="text-gray-600">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 