import Loading from "../Loading/Loading";
import { Cards, CharacterCard } from "./CharacterListStyle";

const CharacterList = ({ items, loading }) => {
  return loading ? (
    <Loading />
  ) : (
    <Cards>
      {items.map((item) => (
        <CharacterCard key={item.char_id} item={item}>
            <img src={item.img} alt={item.name} />
            <h2>{item.name}</h2>
        </CharacterCard>
      ))}
    </Cards>
  );
};

export default CharacterList;
