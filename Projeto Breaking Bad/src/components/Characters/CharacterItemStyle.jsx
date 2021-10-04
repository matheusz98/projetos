import styled from "styled-components";

export const Card = styled.div`
  cursor: pointer;

  img {
    width: 100%;
    height: 480px;
    object-fit: cover;
    border-radius: 10px;
    transition: 0.3s ease-in-out;

    &:hover {
      opacity: 0.5;
      transform: scale(1.02);
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

export const CardContent = styled.div``;
