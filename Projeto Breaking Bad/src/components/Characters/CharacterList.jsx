import { CharactersContent } from "./CharacterListStyle";
import Loading from "../Loading/Loading";
import CharacterItem from "./CharacterItem";
import { Link } from "react-router-dom";

const CharacterList = ({ items, loading }) => {
  return loading ? (
    <Loading />
  ) : (
    <CharactersContent>
      {items.map((item) => (
        <Link to={`/${item.char_id}`}>
          <CharacterItem key={item.char_id} item={item} />
        </Link>
      ))}
    </CharactersContent>
  );
};

export default CharacterList;
