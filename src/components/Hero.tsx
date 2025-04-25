"use client";

import React from 'react';

const Hero = () => {
  return (
    <div className="bg-white py-5">
      <div className="container min-vh-100 d-flex align-items-center">
        <div className="row w-100">
          <div className="col-lg-8 mx-auto text-center">
            <h1 className="display-4 fw-bold text-dark mb-4">
              Vivian Nunes
              <br />
              Consultoria
              <br />
              Especializada
            </h1>
            <h2 className="h4 text-muted mb-4">
              Transformando vidas através do desenvolvimento pessoal e profissional
            </h2>
            <p className="lead text-secondary mb-4">
              Oferecemos soluções personalizadas para o seu crescimento, com foco em resultados 
              práticos e transformação real. Nossa missão é potencializar o seu sucesso.
            </p>
            <button className="btn btn-primary btn-lg">
              Agende uma consultoria
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;