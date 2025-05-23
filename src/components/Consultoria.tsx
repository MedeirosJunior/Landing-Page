"use client";

import React from 'react';
import Image from 'next/image';
import Link from "next/link";

const Consultoria = () => {
  return (
    <section className="py-5 mt-5">
      <div className="container">
        <div className="row align-items-center g-4">
          {/* Coluna da Imagem */}
          <div className="col-md-6">
            <Image
              src="https://raw.githubusercontent.com/MedeirosJunior/Landing-Page/main/public/images/consultoria.jpg"
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
              Oferecemos consultoria especializada em obras no setor de vidros e esquadrias, 
              com foco em otimização de processos, redução de custos e melhoria na qualidade 
              dos serviços. Nossa abordagem é personalizada e adaptada às necessidades de cada projeto.
            </p>
            <ul className="list-unstyled mb-4">
              <li className="d-flex align-items-center mb-2">
                <span className="text-success me-2">✓</span>
                Planejamento e execução de obras de vidros e esquadrias
              </li>
              <li className="d-flex align-items-center mb-2">
                <span className="text-success me-2">✓</span>
                Consultoria técnica para instalação de esquadrias
              </li>
              <li className="d-flex align-items-center mb-2">
                <span className="text-success me-2">✓</span>
                Treinamento de equipes para instalação de vidros
              </li>
              <li className="d-flex align-items-center mb-2">
                <span className="text-success me-2">✓</span>
                Análise e otimização de custos em projetos
              </li>
            </ul>
            <button className="btn btn-primary btn-lg">
              <Link href="/servicos" className="text-white text-decoration-none">
                Conheça nossos serviços
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultoria;