import styled from "styled-components";
import { theme } from "../../global/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 35%;
  background-color: ${theme.colors.secondary};
  margin-top: 15px;
  border-radius: 15px;
  width: 30%;
`;

export const Header = styled.div`
  display: flex;
  height: 30%;
  justify-content: flex-end;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;

export const Number = styled.text`
  font-size: 5rem;
  font-weight: 300;
  text-align: center;
`;
export const Logo = styled.div`
  /* background-color: red; */
  height: 70%;
  width: 70%;
`;
