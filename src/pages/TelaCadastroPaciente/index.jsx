import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const TelaCadastroPaciente = () => {
  const [identidadePaciente, setidentidadePaciente] = useState("");
  const [Usuario, setUsuario] = useState("");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [Celular, setCelular] = useState("");
  const handleVoltar = () => {
    navigate(-1);
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Homepage");
  };
  const handleContinuar = (e) => {
    e.preventDefault();
    navigate("/Homepage");
  };
  return (
    <div id="TelaCadastroPaciente">
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="identidadePaciente">Identidade Paciente: </label>
          <input
            type="identidadePaciente"
            name="identidadePaciente"
            id="identidadePaciente"
            value={identidadePaciente}
            onChange={(e) => setCpf(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="Usuario">Usuário: </label>
          <input
            type="name"
            name="name"
            id="Usuario"
            value={Usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="nome">Nome do Paciente: </label>
          <input
            type="name"
            name="name"
            id="name"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="CPF">CPF do Paciente: </label>
          <input
            type="CPF"
            name="CPF"
            id="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="Celular">Celular: </label>
          <input
            type="Celular"
            name="Celular"
            id="Celular"
            value={Celular}
            onChange={(e) => setCelular(e.target.value)}
          />
        </div>
        <div className="enter">
          <button
            className="BotaoCadastrarPaciente"
            type="submit"
            onClick={handleContinuar}
          >
            Cadastrar
          </button>
        </div>
      </form>

      <div className="back">
        <button
          className="BotaoVoltarCadastroPaciente"
          type="submit"
          onClick={handleVoltar}
        >
          voltar
        </button>
      </div>
    </div>
  );
};

export default TelaCadastroPaciente;
