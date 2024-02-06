import React from "react";
import "./style.css";
import { Pacientes } from "../../data/index.ts";
import { useNavigate } from "react-router-dom";
import conversa from "../Homepage/imagemHomepage/conversa.png";
import deletar from "../Homepage/imagemHomepage/deletar.png";
import editar from "../Homepage/imagemHomepage/editar.png";

const Homepage = () => {
  const [search, setSearch] = React.useState("");
  const navigate = useNavigate();

  const handleCadastroPaciente = () => {
    navigate("/TelaCadastroPaciente");
  };
  const handleEditar = (id) => {
    navigate("/TelaEditarPaciente/");
  };
  const handleDeletar = () => {
    navigate("../TelaDeletarPaciente");
  };
  const handleConversa = () => {
    navigate("");
  };

  const searchLowerCase = search.toLocaleLowerCase();
  const pesquisaPaciente = Pacientes.filter((Paciente) =>
    Paciente.nome.toLocaleLowerCase().includes(searchLowerCase)
  );
  return (
    <div id="total">
      <div id="homepage">
        <h2> Buscar por paciente:</h2>
        <div id="header">
          <input
            type="text"
            placeholder="Insira o nome do paciente... "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>

          <button
            className="BotaoCadastroPaciente"
            onClick={handleCadastroPaciente}
          >
            Cadastro de Paciente
          </button>
        </div>

        <ul>
          {pesquisaPaciente.map((pac) => (
            <li className="itemLista" key={pac.Pacientes}>
              <p className="nomeDaPesquisa">{pac.nome}</p>
              <div className="botoes">
                <button onClick={handleDeletar}>
                  <img src={deletar} alt="" />
                </button>
                <button onClick={handleEditar(pac.id)}>
                  <img src={editar} alt="" />
                </button>
                <button onClick={handleConversa}>
                  <img src={conversa} alt="" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Homepage;
