"use client";

import React from "react";
import Link from "next/link";
import MaskedInput from "@/components/MaskedInput";

const Contato = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget; // Referência ao formulário
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"), // Captura o telefone
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Mensagem enviada com sucesso!");
        form.reset(); // Limpa os campos do formulário
      } else {
        alert("Erro ao enviar a mensagem.");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao enviar a mensagem.");
    }
  };

  return (
    <section className="py-5 bg-light">
      <div id="contato" className="container">
        <h2 className="text-center fw-bold mb-4">
          Entre em contato,<br /> nos mande uma mensagem!
        </h2>
        <div
          className="mx-auto mb-5"
          style={{ width: "80px", height: "4px", backgroundColor: "#F7941D" }}
        ></div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Nome
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Digite seu nome"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  E-mail
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Digite seu e-mail"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Telefone
                </label>
                <MaskedInput
                  mask="(99)99999-9999"
                  className="form-control"
                  id="phone"
                  name="phone"
                  placeholder="Digite seu telefone"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Mensagem
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Digite sua mensagem"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-lg">
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const NavigationItem = () => {
  return (
    <li className="nav-item">
      <Link href="/contato" className="nav-link">
        Contato
      </Link>
    </li>
  );
};

export default Contato;


