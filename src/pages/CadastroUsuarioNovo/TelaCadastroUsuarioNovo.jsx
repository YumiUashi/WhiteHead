import React, {useState} from "react";
import "./style.css"
import { useNavigate } from "react-router-dom";

const TelaCadastroUsuarioNovo = () => {

    const [Usuario, setUsuario] = useState("");
    const [senhaUsuario, setsenhaUsuario] = useState("");
    const [CPFMedico, setCPFMedico] = useState("");
    const [numeroRes, setNumeroRes] = useState("");
    const handleVoltar = () => {
        navigate(-1);
      };

const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/Login')
    }
    const handleContinuar = (e) => {
        e.preventDefault();
        navigate('/Login')

    }

return (
    
  <div id="TelaCadastroUsuarioNovo">
    <form className="form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="Usuario">Usuário: </label>
        <input
          type="Usuario"
          name="Usuario"
          id="Usuario"
          value={Usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <div className="field">
          <label htmlFor="senhaUsuario">Senha: </label>
          <input
            type="senhaUsuario"
            name="senhaUsuario"
            id="senhaUsuario"
            value={senhaUsuario}
            onChange={(e) => setsenhaUsuario(e.target.value)}
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="CPFMedico">CPF: </label>
        <input
          type="CPFMedico"
          name="CPFMedico"
          id="CPFMedico"
          value={CPFMedico}
          onChange={(e) => setCPFMedico(e.target.value)}
        />
        </div>
      <div className="field">
        <label htmlFor="numeroRes">Celular do Responsável: </label>
        <input
          type="numeroRes"
          name="numeroRes"
          id="numeroRes"
          value={numeroRes}
          onChange={(e) => setNumeroRes(e.target.value)}
        />
      </div>
      <div className="enter">
        <button
          className="BotaoCadastrarUsuarioNovo"
          type="submit"
          onClick={handleContinuar}
        >
          Cadastrar
        </button>
      </div>
    </form>

    <div className="back">
      <button
        className="BotaoVoltarCadastroUsuarioNovo"
        type="submit"
        onClick={handleVoltar}
      >
        voltar
      </button>
    </div>
  </div>

)
}

export default TelaCadastroUsuarioNovo