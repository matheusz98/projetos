import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  CharactersContainer,
  CharactersContent,
  Card,
  BtnContainer,
} from "./CharactersStyle";
import Loading from "../Loading/Loading";
import { Button } from "../Button/Button";
import Search from "../Search/Search";

const Characters = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  // Pagination
  const [moreCharacters, setMoreCharacters] = useState(6);
  const load = items.slice(0, moreCharacters);

  const loadMoreCharacters = () => {
    setMoreCharacters(moreCharacters + moreCharacters);
  };

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

  return loading ? (
    <Loading />
  ) : (
    <CharactersContainer>
      <Search getQuery={(q) => setQuery(q)} />
      <CharactersContent>
        {load.map((item) => (
          <Card>
            <Link to={`/${item.char_id}`}>
              <img src={item.img} alt={item.name} />
              <h2>{item.name}</h2>
            </Link>
          </Card>
        ))}
      </CharactersContent>
      <BtnContainer>
        <Button primary white onClick={() => loadMoreCharacters()}>
          Load more
        </Button>
      </BtnContainer>
    </CharactersContainer>
  );
};

export default Characters;
