import React from 'react';
import styled from 'styled-components';


const JunteseContainer = styled.section`
  background-color: #ffff;
  color: #000000;
  padding: 40px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Titulo = styled.h2`
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

const Texto = styled.p`
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

const Juntese = () => {
  return (
    <JunteseContainer>
      <Titulo>Junte-se a Nós!</Titulo>
      <Texto>
        Cada vez que você troca ou descarta de forma correta, está ajudando a construir um mundo mais sustentável.
        Faça parte da nossa comunidade e contribua para uma vida mais consciente e responsável. Inscreva-se agora e seja parte da mudança!
      </Texto>
    </JunteseContainer>
  );
};

export default Juntese;
