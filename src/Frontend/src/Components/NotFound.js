// NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404</h1>
      <h2>Página Não Encontrada</h2>
      <p>Desculpe, a página que você está procurando não existe.</p>
      <Link to="/" style={{ color: 'blue', textDecoration: 'underline' }}>
        Voltar para a Página Inicial
      </Link>
    </div>
  );
}

export default NotFound;
