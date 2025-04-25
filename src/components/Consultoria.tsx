"use client";

import React from 'react';
import Image from 'next/image';

const Consultoria = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center g-4">
          {/* Coluna da Imagem */}
          <div className="col-md-6">
            <Image
              src="/images/consultoria.jpg" // Substitua pelo caminho correto da imagem
              alt="Consultoria"
              width={500}
              height={400}
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Coluna do Conteúdo */}
          <div className="col-md-6">
            <h2 className="display-5 fw-bold mb-4">NOSSOS SERVIÇOS</h2>
            <div className="mb-4" style={{ width: '80px', height: '4px', backgroundColor: '#F7941D' }}></div>
            <p className="text-muted mb-4">
              Oferecemos consultoria especializada em desenvolvimento pessoal e profissional, 
              com foco em transformação real e resultados duradouros. Nossa abordagem é 
              personalizada e adaptada às suas necessidades específicas.
            </p>
            <ul className="list-unstyled mb-4">
              <li className="d-flex align-items-center mb-2">
                <span className="text-success me-2">✓</span>
                Coaching individual e em grupo
              </li>
              <li className="d-flex align-items-center mb-2">
                <span className="text-success me-2">✓</span>
                Mentoria profissional
              </li>
              <li className="d-flex align-items-center mb-2">
                <span className="text-success me-2">✓</span>
                Desenvolvimento de liderança
              </li>
              <li className="d-flex align-items-center mb-2">
                <span className="text-success me-2">✓</span>
                Treinamentos corporativos
              </li>
            </ul>
            <button className="btn btn-primary btn-lg">
              Conheça nossos serviços
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultoria;