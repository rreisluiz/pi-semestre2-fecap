import React from "react";
import RDSemFundo1 from '../assets/rd-sem-fundo-1.png';
import styled from "styled-components";
import { Link } from 'react-router-dom';


const NavbarContainer = styled.div`
  background-image: url(./rectangle-6.svg);
  background-size: 100% 100%;
  height: 158px;
  position: relative;
  width: 100%; 
  max-width: 1440px; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
  }
`;

const Logo = styled(Link)`
  background-color: #2c5431;
  height: 158px;
  width: 164px;
  margin-left: 70px;

  @media (max-width: 768px) {
    margin-left: 0;
    align-self: center;
  }
`;

const RDImage = styled.img`
  height: 127px;
  object-fit: cover;
  width: 164px;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-left: -20px;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;

const MenuItem = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 8px 16px;
  font-size: 14px;
  color: #002c20;
  border-radius: 5px;
  font-family: "Inter-Bold", Helvetica;
  font-weight: 700;
  margin: 1px 0 0 10px;
  transition: background-color 0.3s ease, color 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: #2C5431;
    color: white;
  }

  @media (max-width: 768px) {
    margin: auto;
  }
`;

const Spacer = styled.div`
  width: 15px;
`;

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  height: 40px;
  padding: 0 16px;
  font-size: 14px;
  background-color: #2c5431;
  color: white;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
  transition: background-color 0.3s ease, color 0.3s ease;
  font-weight: bold;
  text-decoration: none;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 10px;
  }

  &:hover {
    background-color: #96AF9F;
    color: #2C5431;
  }
`;

const BtnCadastrar = styled.div`
  background-color: #ffffff;
  border: 1px solid;
  border-color: #000000;
  border-radius: 13px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  margin-left: 20px;
  transition: background-color 0.3s ease, color 0.3s ease;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 10px;
  }

  &:hover {
    background-color: #B88162;
    color: white;
  }
`;

const TextWrapper = styled.div`
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  text-align: center;
  width: 72px;
  text-decoration: none;

  ${BtnCadastrar}:hover & {
    color: white;
  }
`;

function NavBar() {
  return (
    <NavbarContainer>
      <Logo to="/">
        <RDImage className="RD-sem-fundo" alt="Rd sem fundo" src={RDSemFundo1} />
      </Logo>

      <MenuContainer>
        <MenuItem to="/">Home</MenuItem>
        <Spacer /> 
        <MenuItem to="/explorar_itens">Produto</MenuItem>
        <Spacer /> 
        <MenuItem to="/pontos-coleta">Pontos de Coleta</MenuItem>
        <Spacer /> 
        <MenuItem to="/sobre-nos">Sobre Nós</MenuItem>
        
        <Spacer /> 
        <ButtonStyled as={Link} to="/loginpage">Login</ButtonStyled>
        <BtnCadastrar>
          <TextWrapper as={Link} to="/create-account">Cadastrar</TextWrapper>
        </BtnCadastrar>
      </MenuContainer>
    </NavbarContainer>
  );
}

export default NavBar;
