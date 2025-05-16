import React, { useState } from "react";
import api from "../services/api";
import ErroComponent from "./ErroComponent";

const Formulario = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });

  //esse HandleInputChange é responsável por atualizar o estado do formulário
  // quando clicamos no input, ai aparece as informações digitadas no input
  // exemplo: quando eu digitar no input name, o estado do formulário vai mudar
  // e o name vai receber o que eu digitei
// ai o nome que digitei quando eu clicar no input dnv, vai aparecer como já digitado
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [error, setError] = useState<string | null>(null);
  const [showError, setShowError] = useState(false);
  const handleCloseError = () => {
    setShowError(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.number) {
      setError("Preencha todos os campos!");
      setShowError(true);
    } else {
      try {
        const response = await api.post("/api/users/form", formData);
        console.log("Resposta", response);
        alert("Formulário enviado com sucesso!");
        setFormData({
          name: "",
          email: "",
          number: "",
        });
      } catch (error: any) {
        if (error.response.status === 400) {
          const errorMessage = error.response.data.message;
          if (errorMessage === "Email ou Número já cadastrado!") {
            setError("Email ou número já cadastrado!");
            setShowError(true);
            console.log("showError:", showError);
          } else {
            console.error("1-Erro ao enviar formulário:", error);
          }
        } else {
          console.error("2-Erro ao enviar formulário:", error);
        }
      }
    }
  };

  return (
    <>
      {showError && (
        <ErroComponent
          message={error ?? "Erro desconhecido"}
          onClose={handleCloseError}
        />
      )}

      <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Seu nome"
          value={formData.name}
          onChange={handleInputChange}
          className="px-4 py-3 rounded bg-white text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FFCC00]"
        />
        <input
          type="email"
          name="email"
          placeholder="Seu e-mail"
          value={formData.email}
          onChange={handleInputChange}
          className="px-4 py-3 rounded bg-white text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FFCC00]"
        />
        <input
          type="text"
          name="number"
          placeholder="Seu Número"
          value={formData.number}
          onChange={handleInputChange}
          className="px-4 py-3 rounded bg-white text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FFCC00]"
        />
        <button
          type="submit"
          className={`w-full bg-[#FFCC00] text-[#2C0000] font-bold py-3 rounded-full shadow-md
  hover:bg-yellow-400  transform transition-all duration-300 active:scale-95`}
        >
          Enviar
        </button>
      </form>
    </>
  );
};

export default Formulario;
