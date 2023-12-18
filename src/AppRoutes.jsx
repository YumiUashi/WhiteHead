import{
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom"

import LoginPage from "./pages/Login"
import Homepage from "./pages/Homepage"
import TelaCadastroPaciente from "./pages/TelaCadastroPaciente"
import TelaCadastroUsuarioNovo from "./pages/CadastroUsuarioNovo/TelaCadastroUsuarioNovo"

const AppRoutes = () =>{
    return(
        <Router>
            <Routes>
                <Route exact path="/login" element={<LoginPage></LoginPage>}></Route> 
                <Route exact path="/Homepage" element={<Homepage></Homepage>}></Route> 
                <Route exact path="/TelaCadastroPaciente" element={<TelaCadastroPaciente></TelaCadastroPaciente>}></Route>
                <Route exact path="/TelaCadastroUsuarioNovo" element={<TelaCadastroUsuarioNovo></TelaCadastroUsuarioNovo>}></Route>
                <Route
                    path="/"
                    element={ <Navigate to="/login" /> }
                />
            </Routes>
            
        </Router>


    )
}

export default AppRoutes