import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Logo from "../../assets/logo.svg";
import { Subtitle, theme } from "../../global/theme";
import { Circle, Container, Content, Top } from "./styles";

export function Header() {
  return (
    <Container>
      <Top>
        <Subtitle>Diovane Maia</Subtitle>

        <FontAwesomeIcon
          style={{
            height: "30",
            width: "10%",
            color: theme.colors.secondary,
          }}
          icon={faPowerOff}
        />
      </Top>
      <Content>
        <Circle>
          <img src={Logo} alt="Logo"  />
        </Circle>
      </Content>
    </Container>
  );
}
