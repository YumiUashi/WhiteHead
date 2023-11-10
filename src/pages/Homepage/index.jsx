import React from "react";
import "./style.css"
import { Pacientes } from "../../data/index.ts";
import { useNavigate } from "react-router-dom";


const Homepage = () => {

    const [search, setSearch] = React.useState("");
    

    const navigate = useNavigate()
    const handleVoltar = () => {
        navigate(-1);
      };
      const handleCadastroPaciente = () => {
        navigate("/Cadastro");
      };
      const handleDeslogar = () => {
        navigate("/Login");
      };

    const searchLowerCase = search.toLocaleLowerCase()
    const pesquisaPaciente = Pacientes.filter(Paciente => Paciente.nome.toLocaleLowerCase().includes(searchLowerCase));
    const imagePath = require('./imagemHomepage/logoPerfil.jpg');
    return (
        <div id="homepage">
            <div id="header">
                <div className="cadastroPaciente">
                    <button className="BotaoCadastroPaciente" onClick={ handleCadastroPaciente}>Cadastro de Paciente</button>
                </div> 
                <div className="exit">
                    <button className="BotaoSairHomePage" onClick={handleDeslogar}>Sair</button>
                </div>
                <div className="name">
                    <h3>Médico</h3>
                </div>
                <div>
                    <img className="logoPerfilMedico" src={imagePath} alt="LogoPerfilMedico"/>
                </div>
               
            </div>
            <div className="pesquisa">
                <input className="pesquisa1" type="search" placeholder="Digite aqui..." value={search} onChange={(e) => setSearch(e.target.value)}></input>
            </div>

            <ul className="lista">
                 {pesquisaPaciente.map((pac) =>(
             <li className="itemLista" key={pac.Pacientes}>
                <p className="nomeDaPesquisa">{pac.nome}</p>
             </li>
                ))}
              
            </ul>
            <div className="back">
                    <button className="BotaoVoltarHomePage" onClick={handleVoltar}>Voltar</button>
                </div>
        </div>
    )
}

export default Homepage;