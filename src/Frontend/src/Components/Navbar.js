import React from "react";
import { Link, useLocation } from 'react-router-dom';
import styled from "styled-components";
import RDSemFundo1 from '../assets/rd-sem-fundo-1.png';

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
  color: ${({ active }) => (active ? 'white' : '#002c20')};
  background-color: ${({ active }) => (active ? '#2C5431' : 'transparent')};
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
  border: 1px solid #2C5431;
  border-radius: 5px;
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

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const SearchInput = styled.input`
  font-family: inherit;
  font-size: inherit;
  background-color: #f4f2f2;
  border: none;
  color: #646464;
  padding: 0.7rem 1rem;
  border-radius: 30px;
  width: 18em;
  padding-right: 2.5rem;
  transition: all ease-in-out .5s;

  &:hover,
  &:focus {
    box-shadow: 0 0 1em #00000013;
  }

  &:focus {
    outline: none;
    background-color: #f0eeee;
  }

  &::placeholder {
    font-weight: 100;
    color: #ccc;
  }
`;

const SearchButton = styled.button`
  border: none;
  background: transparent;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  &:hover {
    fill: #2C5431;
  }
`;

const SearchIcon = styled.svg`
  height: 1.3em;
  width: 1.3em;
  fill: #b4b4b4;
`;

function NavBar() {
  const location = useLocation();

  return (
    <NavbarContainer>
      <Logo to="/">
        <RDImage className="RD-sem-fundo" alt="Rd sem fundo" src={RDSemFundo1} />
      </Logo>

      <MenuContainer>
        <SearchWrapper>
          <SearchInput type="text" placeholder="Pesquisar" />
          <SearchButton>
            <SearchIcon aria-hidden="true" viewBox="0 0 24 24">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </SearchIcon>
          </SearchButton>
        </SearchWrapper>

        <Spacer /> 
        <MenuItem to="/" active={location.pathname === "/"}>Home</MenuItem>
        <Spacer /> 
        <MenuItem to="/explorar_itens" active={location.pathname === "/explorar_itens"}>Produto</MenuItem>
        <Spacer /> 
        <MenuItem to="/pontos-coleta" active={location.pathname === "/pontos-coleta"}>Pontos de Coleta</MenuItem>
        <Spacer /> 
        <MenuItem to="/sobre-nos" active={location.pathname === "/sobre-nos"}>Sobre Nós</MenuItem>

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
