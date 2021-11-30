import styled from "styled-components";

export const theme = {
  colors: {
    primary: "#8621A9",
    secondary: "#83BF73",
    background: "rgba(242, 242, 242, 1)",
    text: "rgba(242, 242, 242, 1)",
    textDark: "rgba(0, 0, 0, 1)",
  },
};

export const Text = styled.text`
  font-size: 1em;
  color: ${theme.colors.text};
`;

export const Subtitle = styled.text`
  font-size: 1.0rem;
  color: ${theme.colors.text};
`;

export const Title = styled.text`
  font-size: 1.5rem;
  color: ${theme.colors.text};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
