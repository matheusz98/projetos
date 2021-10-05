import {
  NavbarItemsContainer,
  Icon,
  CloseIcon,
  NavbarItemsWrapper,
  NavbarMenu,
  NavbarLink,
} from "./NavItemsStyle";

const NavItems = ({ isOpen, toggle }) => {
  return (
    <>
      <NavbarItemsContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <NavbarItemsWrapper>
          <NavbarMenu>
            <NavbarLink to="/" onClick={toggle}>
              Characters
            </NavbarLink>
          </NavbarMenu>
        </NavbarItemsWrapper>
      </NavbarItemsContainer>
    </>
  );
};

export default NavItems;
