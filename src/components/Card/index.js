import React from "react";
import { Title } from "../../global/theme";
import { Container, Footer, Header, Background, Images } from "./styles";
import selo from "../../assets/selo.png";
export function Card() {
  return (
    <Container>
      <Background>
        <Header>
          <Title>Cartão Fidelidade</Title>
        </Header>
      </Background>
      <Footer>
        <Images>
          <img src={selo} alt="Selo" width={60} height={60} style={{marginBottom: 20}} />
          <img src={selo} alt="Selo" width={60} height={60} style={{marginBottom: 20}} />
          <img src={selo} alt="Selo" width={60} height={60} style={{marginBottom: 20}} />
          <img src={selo} alt="Selo" width={60} height={60} style={{marginBottom: 20}} />
          <img src={selo} alt="Selo" width={60} height={60} style={{marginBottom: 20}} />
          <img src={selo} alt="Selo" width={60} height={60} style={{marginBottom: 20}} />
          <img src={selo} alt="Selo" width={60} height={60} style={{marginBottom: 20}} />
          <img src={selo} alt="Selo" width={60} height={60} style={{marginBottom: 20}} />
          <img src={selo} alt="Selo" width={60} height={60} style={{marginBottom: 20}} />
          <img src={selo} alt="Selo" width={60} height={60} style={{marginBottom: 20}} />
        </Images>
      </Footer>
    </Container>
  );
}
