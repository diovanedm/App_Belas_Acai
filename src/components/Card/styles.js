import styled from "styled-components";
import { theme } from "../../global/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: none;
  margin-top: -1px;
  /* height: 30%; */
`;

export const Background = styled.div`
  width: 100%;
  background-color: ${theme.colors.primary};
`;

export const Header = styled.div`
  width: 90%;
  background-color: ${theme.colors.secondary};
  margin: 0 auto;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0 0;
`;

export const Footer = styled.div`
  display: flex;
  width: 90%;
  background-color: ${theme.colors.primary};
  border-radius: 0 0 10px 10px;
  height: 100%;
  margin-top: -1px;

`;

export const Images = styled.div`
  /* background-color: red; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
  padding: 20px 0
`;
