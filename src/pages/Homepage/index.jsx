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
    return (
        <div id="homepage">
            <div id="header">
                <div className="cadastroPaciente">
                    <button onClick={ handleCadastroPaciente}>Cadastro paciente</button>
                </div> 
                <div className="exit">
                    <button onClick={handleDeslogar}>Sair</button>
                </div>
                <div className="name">
                    <h3>Medico</h3>
                </div>
               
            </div>
            <div className="pesquisa">
                <input className="pesquisa1" type="search" value={search} onChange={(e) => setSearch(e.target.value)}></input>
            </div>

            <ul className="lista">
                 {pesquisaPaciente.map((pac) =>(
             <li className="itemLista" key={pac.Pacientes}>
                <p className="nomeDaPesquisa">{pac.nome}</p>
             </li>
                ))}
              
            </ul>
            <div className="back">
                    <button onClick={handleVoltar}>voltar</button>
                </div>
        </div>
    )
}

export default Homepage;