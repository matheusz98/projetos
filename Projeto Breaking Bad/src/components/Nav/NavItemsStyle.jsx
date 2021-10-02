import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";

export const NavbarItemsContainer = styled.div`
  width: 100%;
  height: 100%;
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  top: 0;
  display: grid;
  align-items: center;
  position: fixed;
  background: #369457;
  padding: 1.25rem 0;
  z-index: 999;
  text-align: center;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  transition: 0.3s ease-in-out;
`;

export const Icon = styled.div`
  top: 1.2rem;
  right: 1.5rem;
  position: absolute;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
`;

export const CloseIcon = styled(RiCloseLine)`
  color: #ffffff;
`;

export const NavbarItemsWrapper = styled.div`
  color: #ffffff;
`;

export const NavbarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: (3, 80px);
  text-align: center;

  @media (max-width: 480px) {
    grid-template-rows: (3, 60px);
  }
`;

export const NavbarLink = styled(LinkRouter)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin: 1rem 0;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #0cd175;
  }
`;
