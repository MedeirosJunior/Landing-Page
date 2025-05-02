"use client";

import React from "react";
import ReactDOM from "react-dom";
import Image from "next/image";

type ImageModalProps = {
  imageUrl: string;
  onClose: () => void;
};

const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, onClose }) => {
  const modalRoot = typeof window !== "undefined" ? document.getElementById("modal-root") : null;

  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      onClick={onClose} // Fecha o modal ao clicar fora
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // Evita fechar ao clicar dentro do modal
      >
        <img
          src={imageUrl}
          alt="Imagem Maximizada"
          className="modal-image"
        />
        <button
          onClick={onClose}
          className="btn-close"
          aria-label="Close"
        >
          &times;
        </button>
      </div>
    </div>,
    modalRoot
  );
};

export default ImageModal;
