import React from "react";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Column } from "../../global/theme";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <div>
        <Header />
        <Card />
      </div>
      <Button />
    </Container>
  );
}
