
import React from "react";
import LogoFim from "../assets/logo-anamnese.png";
import "../Styles/HomePage.css"
export default function Login() {

  return (
    <div className="login">
    <img src={LogoFim} className="logo" alt="logo" />
    <p className="logado">
        Bem vindo(a), <span className="username">Alexandre Pereira</span>
      </p>
    <button className="loguot">Sair</button>
  
    
    </div>

  )
}