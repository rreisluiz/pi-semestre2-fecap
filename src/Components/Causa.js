import React from 'react';
import styled from 'styled-components';


const CausaContainer = styled.section`
  padding: 2rem;
  text-align: center;
  background-color: #ffff; /* Cor do fundo */
`;

const CausaTitulo = styled.h2`
  font-size: 3rem;
  margin-bottom: 3rem;
  margin-top: 100px;
  margin-left:120px;
  margin-right:120px;
  text-align: justify;
  font-style: italic;
  font-family: 'Inter-BoldItalic', 'Helvetica';
  font-weight: bold;
`;

const CausaTexto = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 8rem;
  margin-left:120px;
  margin-right:120px;
  text-align: justify;
  font-style: italic;
  font-family: 'Inter-BoldItalic', 'Helvetica';
`;

const Causa = () => {
  return (
    <CausaContainer id="Causa">
      <CausaTitulo>Por que Fazemos Isso?</CausaTitulo>
      <CausaTexto>
        Esse projeto nasceu do nosso desejo de transformar o jeito como consumimos e descartamos. Vimos uma oportunidade de contribuir ativamente para a preservação do planeta, oferecendo às pessoas uma maneira prática e gratuita de participar dessa mudança. Nosso propósito é criar uma rede de consumo responsável e reduzir o impacto ambiental gerado pelo descarte desnecessário.
      </CausaTexto>
    </CausaContainer>
  );
};

export default Causa;
