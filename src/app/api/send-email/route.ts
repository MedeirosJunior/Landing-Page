import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json(); // Inclua o campo phone

    // Configuração do transporte do Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", // Substitua pelo serviço de e-mail desejado
      auth: {
        user: "@gmail.com", // Substitua pelo seu e-mail
        pass: "xxxxxxxx", // Substitua pela senha do aplicativo
      },
    });

    // Configuração do e-mail
    const mailOptions = {
      from: email,
      to: "junior395@gmail.com", // Substitua pelo seu e-mail
      subject: "Mensagem do Site", // Assunto fixo
      text: `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\n\nMensagem:\n${message}`, // Inclui o telefone no corpo do e-mail
    };

    // Enviar o e-mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "E-mail enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return NextResponse.json({ success: false, message: "Erro ao enviar e-mail." }, { status: 500 });
  }
}

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const form = event.currentTarget; // Referência ao formulário
  const formData = new FormData(form);
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"), // Inclua o campo phone
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
