import styled from 'styled-components';
import Map from '../Components/Map.js'

const FuncionamentoContainer = styled.section`
  background-color: #2C5431;
  text-align: center;
  color: #ffff;
  font-weight: bold;
  font-size: 25px;
`;

const Title = styled.h1`
  text-decoration: none;
  padding: 25px 0 0 0;
`;

function PontosColetaMap({pontosColeta}) {  // Recebe o hook navigate como prop
  return(
    <div>
      <FuncionamentoContainer>
      <Title>Encontre o Ponto de Coleta mais próximo!</Title>
      <Map pontosColeta={pontosColeta}/>
      </FuncionamentoContainer>
    </div>
  );
}

export default PontosColetaMap;
