import React from 'react';
import Filter from '../components/Filter.js';
import Login from "../components/Login.js";
import DateIcon from "../assets/icon-calendar.png";
import "../Styles/HomePage.css";
import DataTable from "../components/DataTable.js";

export default function HomePage() {
  

  return (
    <div className="container">
      <div className="container-login">
        <Login />
      </div>
      <div className="content-ad">
        <div className="header">
          <h2 className="titulo">Título</h2>
          <div className="filtros">
            <Filter
              placeholder="Data Desejada"
              datePickerFormat="DD/MM/YYYY"
              icon={DateIcon}
            />

          </div>
        </div>
        <body className="body">
          <DataTable />
          <button className='voltarhome'> Voltar</button>  
        </body>
      </div>
    </div>
  )
}