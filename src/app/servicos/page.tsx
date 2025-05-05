"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Importa o hook useRouter

interface Obra {
  slug: string;
  title: string;
  description: string;
  images: string[];
}

const Servicos = () => {
  const [obras, setObras] = useState<Obra[]>([]);
  const router = useRouter(); // Inicializa o hook useRouter

  useEffect(() => {
    fetch("/api/getObras")
      .then((res) => res.json())
      .then((data: Obra[]) => setObras(data))
      .catch((err) => console.error("Erro ao buscar obras:", err));
  }, []);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h1 className="text-center fw-bold mb-5">Nossos Serviços</h1>
        <div className="row g-4">
          {obras.map((obra, index) => (
            <div className="col-md-4" key={index}>
              <div className="card shadow-sm h-100">
                <div className="image-container">
                  <Image
                    src={obra.images[0]}
                    alt={obra.title}
                    width={400}
                    height={300}
                    className="img-fluid rounded shadow"
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">{obra.title}</h5>
                  <p className="card-text text-muted">{obra.description}</p>
                  <Link href={`/servicos/${obra.slug}`} className="btn btn-primary">
                    Ver mais
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botão flutuante "Voltar" no topo */}
      <button
        className="btn btn-secondary btn-lg position-fixed"
        style={{
          top: "20px", // Posiciona no topo
          right: "20px", // Alinha à direita
          zIndex: 1000, // Garante que o botão fique acima de outros elementos
        }}
        onClick={() => router.back()} // Redireciona para a página anterior
      >
        Voltar
      </button>
    </section>
  );
};

export default Servicos;
