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
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">
          DEPOIMENTOS
        </h2>
        <div className="mx-auto mb-5" style={{ width: '80px', height: '4px', backgroundColor: '#F7941D' }}></div>

        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-md-4">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body">
                  <p className="card-text text-muted mb-4">
                    "{testimonial.text}"
                  </p>
                  <h5 className="card-title text-primary fw-bold">
                    {testimonial.author}
                  </h5>
                  <p className="card-subtitle text-muted">
                    {testimonial.role}
                  </p>
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