import styled from "styled-components";

export const PaginationContainer = styled.div`
  margin: 2rem 0;
`;

export const PaginationContent = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const PaginationItems = styled.li`
  padding: 2rem 1rem;
`;

export const PaginationLink = styled.a`
  font-size: 1.5rem;
  cursor: pointer;
  color: #ffffff;
  font-weight: 700;
  padding: 1rem 1.25rem;
  border-radius: 10px;
  transition: 0.3s ease-in-out;

  &:hover {
    background: #369457;
  }
`;
