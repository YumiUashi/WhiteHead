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
                    <label htmlFor="email">Email: </label>
                        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="field">
                    <label htmlFor="nome">Nome: </label>
                        <input type="name" name="name" id="name" value={nome} onChange={(e) => setNome(e.target.value)}/>
                </div>
                <div className="field">
                    <label htmlFor="CPF">CPF: </label>
                        <input type="CPF" name="CPF" id="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)}/>
                </div>
                <div className="field">
                    <label htmlFor="nomeRes">Nome do Responsavel: </label>
                        <input type="nameRes" name="nameRes" id="nameRes" value={nomeRes} onChange={(e) => setNomeRes(e.target.value)}/>
                </div>
                <div className="field">
                    <label htmlFor="CpfRes">Cpf Responsavel: </label>
                        <input type="CpfRes" name="CpfRes" id="CpfRes" value={cpfRes} onChange={(e) => setCpfRes(e.target.value)}/>
                </div>
                <div className="field">
                    <label htmlFor="numeroRes">numero do Responsavel: </label>
                        <input type="numeroRes" name="numeroRes" id="numeroRes" value={numeroRes} onChange={(e) => setNumeroRes(e.target.value)}/>
                </div>
                <div className="enter">
                    <button type="submit" onClick={handleContinuar}>continuar</button>
                </div>
                </form>
               
                <div className="back">
                    <button type="submit" onClick={handleVoltar}>voltar</button>
                </div>
        </div>
    )
}

export default Cadastro