// src/contexts/ApiContext.js
import React, { createContext, useContext } from 'react';

// Cria o contexto para a URL da API
const ApiContext = createContext(process.env.REACT_APP_API_URL);

// Hook para usar o contexto em outros componentes
export const useApiUrl = () => useContext(ApiContext);

// Provedor do contexto da URL da API
export const ApiProvider = ({ children }) => {
  const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000";
  return <ApiContext.Provider value={apiUrl}>{children}</ApiContext.Provider>;
};
