import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  text-align: center;
  position: absolute;
  width: 1440px;
  height: 330px;
  left: 0px;
  top: 200px;
  background: rgba(137, 137, 137, 0.1);
  box-shadow: 0px 16px 32px -8px rgba(12, 12, 13, 0.4);
`;

const WelcomeText = styled.h1`
  position: absolute;
  width: 893px;
  height: 103px;
  left: 55px;
  top: 20px;
  font-family: 'Inter';
  font-style: italic;
  font-weight: 700;
  font-size: 96px;
  line-height: 116px;
  color: #002C20;
`;

const UserName = styled.h2`
  color: #66AD6F;
  position: absolute;
  width: 482px;
  height: 48px;
  left: 100px;
  top: 180px;
  font-family: 'Inter';
  font-style: italic;
  font-weight: 700;
  font-size: 52px;
  line-height: 63px;
  text-align: center;
`;

function UserProfile({user}){
  const [nomeUsuario, setNomeUsuario] = useState('');

  

  return (
    <Container>
      <WelcomeText>Seja bem-vindo,</WelcomeText>
      <UserName>{user}!</UserName> 
    </Container>
  );
};

export default UserProfile;