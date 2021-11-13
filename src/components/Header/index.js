import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Column, Text, Title } from "../../global/theme";
import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <Column>
          <Title>Belas Açaí</Title>
          <Text>Diovane Maia</Text>
        </Column>
        <FontAwesomeIcon icon={faPowerOff} />
      </Content>
    </Container>
  );
}
