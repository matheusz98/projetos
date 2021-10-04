import { useState, useEffect } from "react";
import axios from "axios";
import {
  CharactersContainer,
  CharactersContent,
  BtnContainer,
} from "./CharactersStyle";
import Loading from "../Loading/Loading";
import { Button } from "../Button/Button";
import Search from "../Search/Search";
import CharacterList from "./CharacterList";
import Pagination from "../Pagination/Pagination";

const Characters = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

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

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentItems = items.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const pagination = (pageNumber) => setCurrentPage(pageNumber);

  return loading ? (
    <Loading />
  ) : (
    <CharactersContainer>
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterList loading={loading} items={currentItems} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={items.length}
        pagination={pagination}
      />
    </CharactersContainer>
  );
};

export default Characters;
