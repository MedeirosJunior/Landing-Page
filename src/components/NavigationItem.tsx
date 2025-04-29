import React from "react";
import Link from "next/link";

const NavigationItem = () => {
  return (
    <li className="nav-item">
      <Link href="/contato" className="nav-link">
        Contato
      </Link>
    </li>
  );
};

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const email = formData.get("email") as string;

  if (!email.includes("@")) {
    alert("Por favor, insira um e-mail válido.");
    return;
  }

  const data = {
    name: formData.get("name"),
    email,
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
    } else {
      alert("Erro ao enviar a mensagem.");
    }
  } catch (error) {
    console.error("Erro:", error);
    alert("Erro ao enviar a mensagem.");
  }
};

const FormInput = () => {
  return (
    <input
      type="text"
      className="form-control"
      id="name"
      name="name"
      placeholder="Digite seu nome"
      aria-label="Nome"
      required
    />
  );
};

export default NavigationItem;