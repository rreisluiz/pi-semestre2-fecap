import styled from 'styled-components';
import imgTeste from '../assets/Img2.png'

const Container = styled.div`
  max-width: 1400px;
  max-height: 700px;
  margin: 20px auto;
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 15px;
  overflow-y: auto;
`;

const Card = styled.div`
  width: calc(25% - 20px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  box-shadow: 1px 1px 30px 0 #c0c0c0;
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  color: #2d572c;
  text-align: center;
  margin: 0 0 0 0;
  font-size: 1.2em;
`;

const Address = styled.p`
  text-align: center;
  padding: 0 20px 0 20px;
  flex: 1;
`;

const PhoneNumber = styled.p`
    font-size: 1.1em;
    font-weight: 700;
    font-style: italic;
`;

const Button = styled.button`
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

function PontoColetaCard({pontosColeta}) {
    // Recebe o hook navigate como prop
  return (
    <div>
      <Container>
        {pontosColeta.map((pontoColeta) => (
          <Card key={pontoColeta.id}>
            <Image src={imgTeste} alt={pontoColeta.name}/>
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
