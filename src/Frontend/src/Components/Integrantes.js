import React from "react";
import styled from "styled-components";
import IconInstagram from '../assets/instagram.png';
import IconLinkedin from '../assets/linkedin.png';
import IconGithub from '../assets/github.png';
import img1 from '../assets/gabriel_img.png';
import img2 from '../assets/siqueira_img.png';
import img3 from '../assets/rodrigo_img.png';
import img4 from '../assets/vitoria_img.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

// Grid que organiza os cartões dos integrantes em duas colunas
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  margin-top: 60px;
  max-width: 900px;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  background-color: #2d572c;
  color: #fff;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // Sombra leve
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;

const Info = styled.div`
  flex: 1;
`;

const Name = styled.h2`
  margin: 0 0 10px 0;
  font-size: 20px;
`;

const Role = styled.p`
  margin: 0 0 10px 0;
  font-size: 16px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
`;

const Icon = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1); // Aumenta o tamanho levemente
    transition: transform 0.2s;
  }
`;

// Componente principal que renderiza os integrantes
const Integrantes = () => {
  const teamMembers = [
    {
      img: img1,
      name: "Gabriel Carvalho",
      role: "FECAP",
      social: {
        instagram: "https://www.instagram.com/gabs.gcm?igsh=eGNidDE5bHNrYXJ2",
        linkedin: "https://www.linkedin.com/in/gabrielcarvalhomota/",
        github: "https://github.com/Gabs440",
      },
    },
    {
      img: img2,
      name: "Guilherme Siqueira",
      role: "FECAP",
      social: {
        instagram: "https://www.instagram.com/_sik4s_?igsh=MXdxYXZwcW1panZqMA==",
        linkedin: "https://www.linkedin.com/in/guilherme-siqueira-00a03a255/",
        github: "https://github.com/SIkas000",
      },
    },
    {
      img: img3,
      name: "Rodrigo Reis",
      role: "FECAP",
      social: {
        instagram: "https://www.instagram.com/digorreis?igsh=bHR3NnZ5d3YwOWhq",
        linkedin: "https://www.linkedin.com/in/rluizreis/",
        github: "https://github.com/rreisluiz",
      },
    },
    {
      img: img4,
      name: "Vitória Leticia Maciel",
      role: "FECAP",
      social: {
        instagram: "https://www.instagram.com/_vickciv_?igsh=OGJiZWFydXQzM3h4",
        linkedin: "https://www.linkedin.com/in/vitória-leticia-maciel-da-silva-8308a42a6/",
        github: "https://github.com/VickciV1102",
      },
    },
  ];

  return (
    <Container>
      <Grid>
        {teamMembers.map((member, index) => (
          <Card key={index}> {/* Cria um cartão para cada integrante */}
            <ProfileImage src={member.img} alt={member.name} />
            <Info>
              <Name>{member.name}</Name>
              <Role>{member.role}</Role>
              <SocialIcons>
                <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                  <Icon src={IconInstagram} alt="Instagram" />
                </a>
                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <Icon src={IconLinkedin} alt="LinkedIn" />
                </a>
                <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                  <Icon src={IconGithub} alt="GitHub" />
                </a>
              </SocialIcons>
            </Info>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default Integrantes;
