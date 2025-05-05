"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation"; // Importa o hook useRouter
import Image from "next/image";

interface Obra {
  slug: string;
  title: string;
  description: string;
  images: string[];
}

const ObraPage = () => {
  const params = useParams(); // Obtém os parâmetros dinâmicos da URL
  const router = useRouter(); // Inicializa o hook useRouter
  const obra = params && typeof params.obra === "string" ? params.obra : ""; // Garante que 'obra' seja uma string
  const [obraData, setObraData] = useState<Obra | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Estado para a imagem maximizada

  useEffect(() => {
    if (!obra) return; // Evita fazer a requisição se 'obra' for uma string vazia

    // Faz a requisição para a API
    fetch("/api/getObras")
      .then((res) => res.json())
      .then((data: Obra[]) => {
        const foundObra = data.find((o) => o.slug === obra);
        setObraData(foundObra || null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [obra]);

  const handleImageClick = (image: string) => {
    setSelectedImage(image); // Define a imagem selecionada para exibição no modal
  };

  const closeModal = () => {
    setSelectedImage(null); // Fecha o modal
  };

  if (loading) {
    return <p className="text-center">Carregando...</p>;
  }

  if (!obraData) {
    return <p className="text-center">Obra não encontrada.</p>;
  }

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h1 className="text-center fw-bold mb-5">{obraData.title}</h1>
        <p className="text-center text-muted mb-4">{obraData.description}</p>
        <div className="row g-4">
          {obraData.images.map((image, index) => (
            <div className="col-md-4" key={index}>
              <div
                className="image-container"
                onClick={() => handleImageClick(image)} // Define a imagem ao clicar
                style={{
                  width: "100%",
                  height: "300px", // Altura fixa para todas as imagens
                  overflow: "hidden",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                <Image
                  src={image}
                  alt={`${obraData.title} - Imagem ${index + 1}`}
                  width={400}
                  height={300}
                  className="img-fluid rounded shadow"
                  style={{ objectFit: "cover" }} // Garante que a imagem preencha o espaço
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para exibir a imagem maximizada */}
      {selectedImage && (
        <div
          className="modal-overlay"
          onClick={closeModal} // Fecha o modal ao clicar fora da imagem
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Evita que o clique na imagem feche o modal
          >
            <Image
              src={selectedImage}
              alt="Imagem Maximizada"
              width={800}
              height={600}
              className="img-fluid"
            />
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "transparent",
                border: "none",
                color: "black",
                fontSize: "24px",
                cursor: "pointer",
              }}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Botão flutuante "Voltar" */}
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

export default ObraPage;