import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import LogoIMG from "../../images/logo.png";

const LogoContainer = styled(LinkRouter)`
  display: flex;
  align-items: center;
  margin-left: 0.625rem;
  cursor: pointer;

  img {
    width: 8rem;
  }
`;

const Logo = () => {
  return (
    <LogoContainer>
      <img src={LogoIMG} alt="Breaking Bad Logo" />
    </LogoContainer>
  );
};

export default Logo;
