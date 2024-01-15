import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import logo from "../CadastroUsuarioNovo/imagem/logo.svg";

const TelaCadastroUsuarioNovo = () => {
  const [Usuario, setUsuario] = useState("");
  const [senhaUsuario, setsenhaUsuario] = useState("");
  const [CPFMedico, setCPFMedico] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Login");
  };
  const handleContinuar = (e) => {
    e.preventDefault();
    navigate("/Login");
  };

  return (
    <div id="FundoTelaCadastroUsuarioNovo">
      <div id="TelaCadastroUsuarioNovo">
        <form className="form" onSubmit={handleSubmit}>
          <div className="cima">
            <img src={logo} alt="logo" />
            <h1 className="titulo">Bem vindo</h1>
            <h2 className="subtitulo"> insira seus dados</h2>
          </div>
          <div className="meio">
            <div className="field">
              <input
                placeholder="Usuario"
                type="Usuario"
                name="Usuario"
                id="Usuario"
                value={Usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
            </div>
            <div className="field">
              <input
                placeholder="Senha"
                type="senhaUsuario"
                name="senhaUsuario"
                id="senhaUsuario"
                value={senhaUsuario}
                onChange={(e) => setsenhaUsuario(e.target.value)}
              />
            </div>
            <div className="field">
              <input
                placeholder="CRM"
                type="CPFMedico"
                name="CPFMedico"
                id="CPFMedico"
                value={CPFMedico}
                onChange={(e) => setCPFMedico(e.target.value)}
              />
            </div>
          </div>

          <div className="baixo">
            <div className="criar-conta">
              <a href="/login"> Já tenho conta </a>
            </div>
            <button
              className="BotaoCadastrarUsuarioNovo"
              type="submit"
              onClick={handleContinuar}
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TelaCadastroUsuarioNovo;
