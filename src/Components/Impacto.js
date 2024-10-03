import React from 'react';
import styled from 'styled-components';


const ImpactoContainer = styled.section`
  padding: 2rem;
  text-align: center;
  background-color: #ffff;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ImpactoTitulo = styled.h2`
  font-size: 3rem;
  margin-bottom: 3rem;
  margin-top: 100px;
  margin-left:120px;
  margin-right:120px;
  text-align: justify;
  font-style: italic;
  font-family: 'Inter-BoldItalic', 'Helvetica';
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-top: 50px;
  }
`;

const ImpactoTexto = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 8rem;
  margin-left:120px;
  margin-right:120px;
  text-align: justify;
  font-style: italic;
  font-family: 'Inter-BoldItalic', 'Helvetica';

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 4rem;
  }
`;

const Impacto = () => {
  return (
    <ImpactoContainer>
      <ImpactoTitulo>Impacto</ImpactoTitulo>
      <ImpactoTexto>
        Nossa missão é causar um impacto positivo no mundo. Acreditamos que pequenas ações podem gerar grandes mudanças. Cada passo que damos em direção à sustentabilidade e responsabilidade faz a diferença.
      </ImpactoTexto>
    </ImpactoContainer>
  );
};

export default Impacto;
