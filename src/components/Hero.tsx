"use client";

import React from 'react';

const Hero = () => {
  return (
    <div className="bg-white py-3"> {/* Reduzido de py-5 para py-3 */}
      <div className="container min-vh-75 d-flex align-items-center"> {/* Reduzido de min-vh-100 para min-vh-75 */}
        <div className="row w-100">
          <div className="col-lg-8 mx-auto text-center">
            <h1 className="display-4 fw-bold text-dark mb-4">
              Vivian Nunes
              <br />
              Consultoria Especializada
            </h1>
            <h2 className="h4 text-muted mb-4">
              Transformando sua obra através de soluções de tecnologia de ponta e profissionais altamente qualificados.
            </h2>
            <p className="lead text-secondary mb-4">
              Oferecemos soluções personalizadas para a sua obra, com foco no design personalizado e conforto do cliente.
              Nossa equipe é composta por profissionais altamente qualificados, prontos para transformar sua visão em realidade. Combinamos tecnologia de ponta com experiência prática para garantir resultados excepcionais. 
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