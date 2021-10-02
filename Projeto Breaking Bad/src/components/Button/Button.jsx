import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#369457" : "#ffffff")};
  color: ${({ white }) => (white ? "#ffffff" : "#032202")};
  font-size: ${({ bigFont }) => (bigFont ? "2rem" : "1.25rem")};
  padding: ${({ big }) => (big ? "2rem 2.5rem" : "1rem 1.5rem")};
  text-transform: ${({ uppercase }) =>
    uppercase ? "uppercase" : "capitalize"};
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background: ${({ primary }) => (primary ? "#093009" : "#0D3E10")};
  }
`;
