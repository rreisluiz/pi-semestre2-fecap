import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 20px 40px 30px;
  text-align: center;
  position: absolute;
  width: 1440px;
  left: 0px;
  background: rgba(137, 137, 137, 0.1);
  box-shadow: 0px 16px 32px -8px rgba(12, 12, 13, 0.4);
`;

const WelcomeText = styled.h1`
  position: relative;
  width: 1000px;
  height: 100px;
  font-style: italic;
  font-weight: 700;
  font-size: 96px;
  line-height: 116px;
  color: #002C20;
  text-align: left;
`;

const UserName = styled.h2`
  color: #66AD6F;
  position: relative;
  width: 1000px;
  height: 50px;
  font-style: italic;
  font-weight: 700;
  font-size: 52px;
  line-height: 63px;
  text-align: left;
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