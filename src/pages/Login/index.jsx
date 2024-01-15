import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import logo from "../Login/imagem/logo.svg";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Homepage");
  };

  // const imagePath = require('../Login/imagem/logo.svg');

  return (
    <div id="TelaLogin">
      <div id="login">
        <form className="form" onSubmit={handleSubmit}>
          <div className="cima">
            <img src={logo} alt="logo" />
            <h1 className="titulo">Bem vindo</h1>
            <h2 className="subtitulo"> insira seus dados</h2>
          </div>

          <div className="meio">
            <div className="field">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Usuário"
              />
            </div>
            <div className="field">
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Senha"
              />
            </div>
          </div>
          <div className="baixo">
            <div className="criar-conta">
              <a href="/TelaCadastroUsuarioNovo"> Criar conta </a>
            </div>
            <button type="submit">Entrar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
