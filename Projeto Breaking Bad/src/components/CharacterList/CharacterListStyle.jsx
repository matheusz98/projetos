import styled from "styled-components";

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.625rem;
  margin-top: 5rem;
  padding: 0 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const CharacterCard = styled.div`
  cursor: pointer;

  img {
    width: 100%;
    height: 480px;
    object-fit: cover;
    border-radius: 10px;
    transition: 0.3s ease-in-out;

    &:hover {
      opacity: 0.5;
    }
  }

  h2 {
    font-size: 1.5rem;
    color: #ffffff;
    text-align: center;
    padding: 1rem 0;
    font-weight: 700;
  }
`;
