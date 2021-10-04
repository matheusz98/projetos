import styled from "styled-components";

export const CharactersContainer = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: rgb(9, 48, 9);
  background: linear-gradient(
    90deg,
    rgba(9, 48, 9, 1) 0%,
    rgba(3, 34, 2, 1) 48%,
    rgba(54, 148, 87, 1) 100%
  );
`;

export const CharactersContent = styled.div`
  padding-top: 15rem;
  max-width: 1100px;
`;
