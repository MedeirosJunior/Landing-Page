"use client";

import React from 'react';

const testimonials = [
  {
    text: "A consultoria da Vivian Nunes foi essencial para otimizar os processos em nossas obras de vidros e esquadrias. A expertise técnica trouxe resultados incríveis.",
    author: "ADRIANA SOUZA",
    role: "Engenheira Civil"
  },
  {
    text: "Com o suporte da Vivian Nunes, conseguimos reduzir custos e melhorar a qualidade na instalação de esquadrias. Recomendo para qualquer empresa do setor.",
    author: "JOSÉ LUIS",
    role: "Empresário"
  },
  {
    text: "O acompanhamento personalizado da Vivian Nunes fez toda a diferença no planejamento e execução das nossas obras de vidros. Excelente trabalho!",
    author: "FERNANDO LIMA",
    role: "Arquiteto"
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