import React, {useState} from "react";
import "./style.css";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/Homepage')
    }

    const imagePath = require('./imagem/logo.png');
    
    return (
        <div id="login">
            <div>
                <img className="logo" src={imagePath} alt="LogoLogin"/>
            </div>
            <form className="form" onSubmit={handleSubmit}>
            <h1 className="title">Login do Sistema</h1>
                <div className="field">
                    <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="field">
                    <label htmlFor="password">Senha:</label>
                        <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="actions">
                    <button className="BotaoEntrar" type="submit">Entrar</button>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;
