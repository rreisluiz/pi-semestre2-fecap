import React from "react";
import styled from 'styled-components';
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import PontoColetaCard from "../Components/PontoColetaCard.js";
import PontosColetaMap from "../Components/PontosColetaMap.js";

const Title = styled.h1`
  font-size: 3em;
  padding-left: 50px;
`;

function PontosColeta() {

  const pontosColeta = [
    {
        id: 1,
        name: "Ecoponto Mirandópolis",
        address: "Av. Senador Casemiro da Rocha, 1220 - Mirandópolis, São Paulo - SP, 04047-003, Brasil",
        phone: "+55 11 96246-8870",
        mapPosition: {
            lat: -23.556480135716644,
            lng: -46.63680436875619
        }
    },
    {
        id: 2,
        name: "Ecoponto Santa Cruz",
        address: "R. Santa Cruz, 1452 - Vila Mariana, São Paulo - SP, 04122-001, Brasil",
        phone: null,
        mapPosition: {
            lat: -23.583333333333333,
            lng: -46.641666666666665
        }
    },
    {
        id: 3,
        name: "Ecoponto Vila Mariana",
        address: "R. Afonso Celso, 147 - Vila Mariana, São Paulo - SP, 04119-002, Brasil",
        phone: null,
        mapPosition: {
            lat: -23.583333333333333,
            lng: -46.641666666666665
        }
    },
    {
        id: 4,
        name: "Ecoponto Vila Madalena",
        address: "R. Girassol, 21 - Vila Madalena, São Paulo - SP, 05433-000, Brasil",
        phone: null,
        mapPosition: {
            lat: -23.556480135716644,
            lng: -46.63680436875619
        }
    },
    {
        id: 5,
        name: "Ecoponto Cidade Saudável",
        address: "R. Ptolomeu, 869 - Vila Socorro, São Paulo - SP, 04762-040, Brasil",
        phone: null,
        mapPosition: {
            lat: -23.556480135716644,
            lng: -46.63680436875619
        }
    },
    {
        id: 6,
        name: "Ecoponto Sé",
        address: "Rua da Figueira, 1030 - Sé, São Paulo - SP, 01227-000, Brasil",
        phone: "+55 11 3397-1763",
        mapPosition: {
            lat: -23.556480135716644,
            lng: -46.63680436875619
        },
    },
    {
        id: 7,
        name: "Ecoponto Mooca",
        address: "Rua da Mooca, 3951 - Mooca, São Paulo - SP, 03165-001, Brasil",
        phone: "+55 11 3208-7239",
        mapPosition: {
            lat: -23.556480135716644,
            lng: -46.63680436875619
        },
    },
    {
        id: 8,
        name: "Ecoponto Pinheiros",
        address: "Rua Guaicuí, 35 - Pinheiros, São Paulo - SP, 05442-030, Brasil",
        phone: null,
        mapPosition: {
            lat: -23.556480135716644,
            lng: -46.63680436875619
        },
    },
    {
        id: 9,
        name: "Ecoponto Jabaquara",
        address: "Av. Engenheiro Armando de Arruda Pereira, 4215 - Jabaquara, São Paulo - SP, 04309-010, Brasil",
        phone: "+55 11 5011-7022",
        mapPosition: {
            lat: -23.556480135716644,
            lng: -46.63680436875619
        },
    },
    {
        id: 10,
        name: "Ecoponto São Mateus",
        address: "Av. Adélia Chohfi, 150 - São Mateus, São Paulo - SP, 03951-000, Brasil",
        phone: "+55 11 2019-6318",
        mapPosition: {
            lat: -23.556480135716644,
            lng: -46.63680436875619
        },
    }
]

  return (
    <div>
      <Navbar/>
      <Title>Pontos de Coleta</Title>
      <PontosColetaMap pontosColeta={pontosColeta}/>
      <PontoColetaCard pontosColeta={pontosColeta}/>
      <Footer/>
    </div>
  );
}

export default PontosColeta;