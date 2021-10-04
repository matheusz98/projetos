import { Card } from "./CharacterItemStyle";

const CharacterItem = ({ item }) => {
  return (
    <Card>
      <img src={item.img} alt={item.name} />
      <h2>{item.name}</h2>
    </Card>
  );
};

export default CharacterItem;
