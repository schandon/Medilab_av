import React, { useState, useEffect, useCallback } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { useDateFilter } from '../context/FilterContext';
import "../Styles/DataTable.css";


const formatDate = (dateString) => {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', options);
};

const formatVisualizacao = (visualizacao) => {
  if (visualizacao === "T") {
    return 'Ler Anamnase';
  } else {
    return 'Responder Questionário';
  }
};

const columns = [
  {
    name: 'ID',
    selector: row => row.patientID,
    sortable: true,
  },
  {
    name: 'Paciente',
    selector: row => row.nome,
    sortable: true,
  },
  {
    name: 'Número',
    selector: row => row.numero,
    sortable: true,
  },
  {
    name: 'Tipo de Exame',
    selector: row => row.tipoExame,
    sortable: true,
  },
  {
    name: 'Modalidade',
    selector: row => row.modalidade,
    sortable: true,
  },
  {
    name: 'Data',
    selector: row => formatDate(row.data),
    sortable: true,
  },
  {
    name: 'Visualização',
    selector: row => formatVisualizacao(row.especial),
    sortable: true,
    cell: row => (
      <div className="visualizacao-cell">
        {formatVisualizacao(row.especial)}
      </div>),
  },
];

const PatientTable = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { date, modalidade } = useDateFilter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/pacientes');
        console.log("Dados da API:", response.data);
        setData(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Erro na requisição:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filterData = useCallback(() => {
    let filtered = data;

    if (date) {
      filtered = filtered.filter(item => {
        const itemDate = formatDate(item.date); // Obtém apenas 'YYYY-MM-DD'
        const selectedDate = date; // Formata a data selecionada para 'YYYY-MM-DD'
        return itemDate === selectedDate;
      });
    }

    if (modalidade) {
      filtered = filtered.filter(item => item.modalidade === modalidade);
    }

    setFilteredData(filtered);
  }, [date, modalidade, data]);

  useEffect(() => {
    filterData();
  }, [filterData]);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <DataTable className='tabelaDados'
        
        columns={columns}
        data={filteredData}
        pagination
      />
    </div>

  );
};

export default PatientTable;
