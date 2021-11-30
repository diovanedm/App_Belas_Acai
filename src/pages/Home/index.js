import React from "react";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
        <Header />
        <Card />
      {/* <Button /> */}
    </Container>
  );
}
