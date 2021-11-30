import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { theme } from "../../global/theme";
import Selo from "../../assets/selo.svg";
import { Container, Header, Body, Number, Logo} from "./styles";
export function Card() {
  return (
    <Container>
      <Header>
        <FontAwesomeIcon
          style={{
            color: theme.colors.primary,
            fontSize: "30px",
            marginRight: "10px",  
            marginTop: "10px"
          }}
          icon={faPlusCircle}
        />
      </Header>
      <Body>
        <Number>1</Number>
        <Logo>
          <img src={Selo} alt="Selo"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Logo>
      </Body>
    </Container>
  );
}
