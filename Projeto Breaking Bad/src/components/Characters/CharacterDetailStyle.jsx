import styled from "styled-components";

export const CharacterDetailContainer = styled.section`
  background: rgba(0, 0, 0, 0.8);
  padding-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CharacterDetailContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const CharacterImg = styled.div`
  img {
    height: 600px;
    object-fit: cover;
    border-radius: 10px;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const CharacterInfo = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  font-size: 1.25rem;
  color: #fff;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }

  li {
    margin: 1rem 0;
  }
`;

export const BtnContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;
