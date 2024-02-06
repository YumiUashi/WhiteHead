import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import voltar from "../TelaCadastroPaciente/imagemTelaCadastroPaciente/voltar.png";

const TelaDeletarPaciente = () => {
  // const [nome, setNome] = useState("");
  // const [cpf, setCpf] = useState("");
  // const [email, setEmail] = useState("");
  // const [Celular, setCelular] = useState("");
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
    <div id="TelaDeletarPaciente">
      <div id="formpac" className="telaDeletarTudo">
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
            <h1>DeletarPaciente</h1>
          </div>
          <div className="meio">
            <div className="field">
              <label htmlFor="nome">Nome: </label>
              <label htmlFor="">sozeasdsada</label>
            </div>
            <div className="field">
              <label htmlFor="Sobrenome">Sobrenome: </label>
              <label htmlFor=""></label>
            </div>
            <div className="field">
              <label htmlFor="email">E-mail: </label>
              <label htmlFor=""></label>
            </div>
            <div className="field">
              <label htmlFor="Celular">Celular: </label>
              <label htmlFor=""></label>
            </div>
          </div>
          <div className="baixo">
            <button
              className="BotaoCadastrarPaciente"
              type="submit"
              onClick={handleContinuar}
            >
              Confirmar Exclus
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TelaDeletarPaciente;
