import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Navbar = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  background: ${({ scrollNav }) => (scrollNav ? "#369457" : "transparent")};
  font-size: 1rem;
  margin-top: -80px;
  z-index: 10;
  transition: 0.5s ease-in-out;

`;

export const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  padding: 0 1.5rem;
`;

export const MenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    top: 0;
    right: 0;
    position: absolute;
    font-size: 1.8rem;
    color: #ffffff;
    transform: translate(-100%, 60%);
    cursor: pointer;
  }
`;

export const NavbarMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-right: -22px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavbarItem = styled.li`
  height: 80px;
`;

export const NavbarLinks = styled(LinkRouter)`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #0cd175;
  }

  &.active {
    border-bottom: 2px solid #0d3e10;
  }
`;
