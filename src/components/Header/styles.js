import styled from "styled-components";
import { theme } from "../../global/theme";

export const Container = styled.header`
  width: 100%;
  height: 25%;
  background-color: ${theme.colors.primary};
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;
