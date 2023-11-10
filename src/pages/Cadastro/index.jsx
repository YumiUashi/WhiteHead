import React, {useState} from "react";
import "./style.css"
import { useNavigate } from "react-router-dom";

const Cadastro = () => {

    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [nomeRes, setNomeRes] = useState("");
    const [cpfRes, setCpfRes] = useState("");
    const [numeroRes, setNumeroRes] = useState("");
    const handleVoltar = () => {
        navigate(-1);
      };

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/Homepage')
    }
    const handleContinuar = (e) => {
        e.preventDefault();
        navigate('/Homepage')
    }
    return (
        <div id="Cadastro">
            <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="nome">Nome do Paciente: </label>
                        <input type="name" name="name" id="name" value={nome} onChange={(e) => setNome(e.target.value)}/>
                </div>
                <div className="field">
                    <label htmlFor="CPF">CPF do Paciente: </label>
                        <input type="CPF" name="CPF" id="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)}/>
                </div>
                <div className="field">
                    <label htmlFor="nomeRes">Nome do Responsável: </label>
                        <input type="nameRes" name="nameRes" id="nameRes" value={nomeRes} onChange={(e) => setNomeRes(e.target.value)}/>
                </div>
                <div className="field">
                    <label htmlFor="email">Email do Responsável: </label>
                        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="field">
                    <label htmlFor="CpfRes">CPF do Responsável: </label>
                        <input type="CpfRes" name="CpfRes" id="CpfRes" value={cpfRes} onChange={(e) => setCpfRes(e.target.value)}/>
                </div>
                <div className="field">
                    <label htmlFor="numeroRes">Celular do Responsável: </label>
                        <input type="numeroRes" name="numeroRes" id="numeroRes" value={numeroRes} onChange={(e) => setNumeroRes(e.target.value)}/>
                </div>
                <div className="enter">
                    <button className="BotaoCadastrarPaciente" type="submit" onClick={handleContinuar}>Cadastrar</button>
                </div>
                </form>
               
                <div className="back">
                    <button className="BotaoVoltarCadastroPaciente" type="submit" onClick={handleVoltar}>voltar</button>
                </div>
        </div>
    )
}

export default Cadastro