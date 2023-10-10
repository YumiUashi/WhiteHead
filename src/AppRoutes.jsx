import{
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom"

import LoginPage from "./pages/Login"
import Homepage from "./pages/Homepage"
import Cadastro from "./pages/Cadastro"

const AppRoutes = () =>{
    return(
        <Router>
            <Routes>
                <Route exact path="/login" element={<LoginPage></LoginPage>}></Route> 
                <Route exact path="/Homepage" element={<Homepage></Homepage>}></Route> 
                <Route exact path="/Cadastro" element={<Cadastro></Cadastro>}></Route>
                <Route
                    path="/"
                    element={ <Navigate to="/login" /> }
                />
            </Routes>
            
        </Router>


    )
}

export default AppRoutes