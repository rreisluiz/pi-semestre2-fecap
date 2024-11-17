import styled from 'styled-components';
import imgTeste from '../assets/Img2.png';

const Container = styled.div`
  max-width: 1400px;
  margin: 7em auto;
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 6em 7em; 
  overflow-y: auto;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  box-shadow: 1px 1px 20px 0 #c0c0c0;
  border-radius:8px;
  max-width: 300px; 
  `;

const Image = styled.img`
  width: 100%;
  height: 250px; 
  object-fit: cover;
  border-radius:8px;
  margin-bottom: 20px; 
  `;

const Title = styled.h2`
  color: #2d572c;
  text-align: center;
  margin: 0 10px 20px 10px;  
  font-size: 1.2em;
  `;

const Address = styled.p`
  text-align: center;
  padding: 0 20px;
  flex: 1;
  font-size: 1em;
  `;

const PhoneNumber = styled.p`
  font-size: 1.1em;
  font-weight: 700;
  font-style: italic;
  margin: 10px 0;
  `;

const Button = styled.button`
  border-radius:0px 0px 8px 8px;
  width: 100%;
  padding: 10px 20px;
  border: none;
  background-color: #2d572c;
  color: white;
  cursor: pointer;
  margin-top: auto;
  font-weight: 550;
  font-size: 1.05em;
  &:hover {
    background-color: #2d452c;
  }
`;

function PontoColetaCard({ pontosColeta }) {
  // Recebe o hook navigate como prop
  return (
    <div>
      <Container>
        {pontosColeta.map((pontoColeta) => (
          <Card key={pontoColeta.id}>
            <Image src={imgTeste} alt={pontoColeta.name} />
            <Title>{pontoColeta.name}</Title>
            <Address>{pontoColeta.address}</Address>
            <PhoneNumber>{pontoColeta.phone}</PhoneNumber>
            <Button>Saiba mais</Button>
          </Card>
        ))}
      </Container>
    </div>
  );
}

export default PontoColetaCard;
