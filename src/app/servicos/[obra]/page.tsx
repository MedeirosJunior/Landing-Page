"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

const ObraPage = () => {
  const { obra } = useParams(); // Obtém o parâmetro dinâmico da URL
  const [obraData, setObraData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null); // Estado para a imagem maximizada

  useEffect(() => {
    // Faz a requisição para a API
    fetch("/api/getObras")
      .then((res) => res.json())
      .then((data) => {
        const foundObra = data.find((o) => o.slug === obra);
        setObraData(foundObra);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [obra]);

  const handleImageClick = (image) => {
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
    </section>
  );
};

export default ObraPage;