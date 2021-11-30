import styled from "styled-components";
import { theme } from "../../global/theme";

export const Container = styled.header`
  flex-direction: row;
  background-color: ${theme.colors.primary};
  padding: 0 15px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
`;

export const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${theme.colors.secondary};
`;

export const Top = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
