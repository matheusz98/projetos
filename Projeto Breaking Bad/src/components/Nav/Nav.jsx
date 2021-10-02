import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { BiMenuAltRight } from "react-icons/bi";
import Logo from "../Logo/Logo";
import {
  Navbar,
  NavbarContainer,
  MenuIcon,
  NavbarMenu,
  NavbarItem,
  NavbarLinks,
} from "./NavStyle";

const Nav = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNavBg = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Navbar scrollNav={scrollNav}>
        <NavbarContainer>
          <Link to="/">
            <Logo onClick={toggleHome} />
          </Link>
          <MenuIcon onClick={toggle}>
            <BiMenuAltRight />
          </MenuIcon>
          <NavbarMenu>
            <NavbarItem>
              <NavbarLinks to="/">Characters</NavbarLinks>
            </NavbarItem>
            <NavbarItem>
              <NavbarLinks to="/episodes">Episodes</NavbarLinks>
            </NavbarItem>
            <NavbarItem>
              <NavbarLinks to="/quotes">Quotes</NavbarLinks>
            </NavbarItem>
          </NavbarMenu>
        </NavbarContainer>
      </Navbar>
    </>
  );
};

export default Nav;
