import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import voltar from "../TelaCadastroPaciente/imagemTelaCadastroPaciente/voltar.png";

const TelaEditarPaciente = () => {
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
    <div id="TelaEditarPaciente">
      <div id="formpac" className="telaEditarTudo">
        <form className="form" onSubmit={handleSubmit}>
          <div className="cima">
            <button
              anchor="formpac"
              className="voltarBotao"
              type="submit"
              onClick={handleVoltar}
            >
              <img src={voltar} alt="voltar" />
            </button>
            <h1>Atualizar paciente</h1>
          </div>
          <div className="meio">
            <div className="field">
              <label htmlFor="nome">Nome: </label>
              <input
                type="name"
                name="name"
                id="name"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="Sobrenome">Sobrenome: </label>
              <input
                type="Sobrenome"
                name="Sobrenome"
                id="Sobrenome"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="email">E-mail: </label>
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
          </div>
          <div className="baixo">
            <button
              className="BotaoCadastrarPaciente"
              type="submit"
              onClick={handleContinuar}
            >
              Confirmar edição
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TelaEditarPaciente;
