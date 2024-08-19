import React, { createContext, useState, useContext } from 'react';

const DateFilterContext = createContext();

export const DateFilterProvider = ({ children }) => {
  const [date, setDate] = useState(null);
  const [modalidade, setModalidade] = useState('');
  return (
    <DateFilterContext.Provider value={{ date, setDate, modalidade, setModalidade }}>
      {children}
    </DateFilterContext.Provider>
  );
};

export const useDateFilter = () => useContext(DateFilterContext);
