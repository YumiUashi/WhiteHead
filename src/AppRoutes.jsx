import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import LoginPage from "./pages/Login";
import Homepage from "./pages/Homepage";
import TelaCadastroPaciente from "./pages/TelaCadastroPaciente";
import TelaCadastroUsuarioNovo from "./pages/CadastroUsuarioNovo/TelaCadastroUsuarioNovo";
import TelaEditarPaciente from "./pages/TelaEditarPaciente";
import TelaDeletarPaciente from "./pages/TelaDeletarPaciente";
import ChatPage from "./pages/ChatPage";
import ChatSintesis from "./pages/ChatSintesis";
import ChatSuggeston from "./pages/ChatPageSuggeston";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route exact path="/Homepage" element={<Homepage></Homepage>}></Route>
        <Route
          exact
          path="/TelaCadastroPaciente"
          element={<TelaCadastroPaciente></TelaCadastroPaciente>}
        ></Route>
        <Route
          exact
          path="/TelaCadastroUsuarioNovo"
          element={<TelaCadastroUsuarioNovo></TelaCadastroUsuarioNovo>}
        ></Route>
        <Route
          exact
          path="/TelaDeletarPaciente"
          element={<TelaDeletarPaciente></TelaDeletarPaciente>}
        ></Route>
        <Route
          exact
          path="/TelaEditarPaciente"
          element={<TelaEditarPaciente></TelaEditarPaciente>}
        ></Route>
        <Route exact path="/ChatPage" element={<ChatPage></ChatPage>}></Route>
        <Route exact path="/ChatSintesis" element={<ChatSintesis></ChatSintesis>}></Route>
        <Route exact path="/ChatSuggeston" element={<ChatSuggeston></ChatSuggeston>}></Route>
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
