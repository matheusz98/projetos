import { useState, useEffect } from "react";
import { CharactersContainer } from "./CharactersStyle";
import Nav from "../../components/Nav/Nav";
import NavItems from "../../components/Nav/NavItems";

const Characters = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavItems isOpen={isOpen} toggle={toggle} />
      <Nav toggle={toggle} />
      <CharactersContainer>
        <h1>Olá mundo!</h1>
        <div>
          <p>lorem ipsum dolor sit amet</p>
        </div>
      </CharactersContainer>
    </>
  );
};

export default Characters;
