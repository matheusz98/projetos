import { useState, useEffect } from "react";
import axios from "axios";
import { CharactersContainer, CharactersContent } from "./CharactersStyle";
import Nav from "../../components/Nav/Nav";
import NavItems from "../../components/Nav/NavItems";
import Search from "../../components/Search/Search";
import CharacterList from "../../components/CharacterList/CharacterList";

const Characters = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      setItems(result.data);
      setLoading(false);
    };

    getItems();
  }, [query]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavItems isOpen={isOpen} toggle={toggle} />
      <Nav toggle={toggle} />
      <CharactersContainer>
        <CharactersContent>
          <Search getQuery={(q) => setQuery(q)} />
          <CharacterList loading={loading} items={items} />
        </CharactersContent>
      </CharactersContainer>
    </>
  );
};

export default Characters;
