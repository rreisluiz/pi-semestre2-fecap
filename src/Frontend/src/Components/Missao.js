import React from 'react';
import styled from 'styled-components';
import DivMissao from '../assets/DivMissao.png';

const MissaoImage = styled.img`
  width: 100.5%;
`;

function Missao() {
  return (
    <MissaoImage src={DivMissao} alt="Missão" />
  );
}

export default Missao;
