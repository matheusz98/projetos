import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "./CharacterItemStyle";

const CharacterItem = ({ item }) => {
  const [queryName, setQueryName] = useState("");

  useEffect(() => {
    const charName = item.name.replace(" ", "+");

    setQueryName(charName);
  }, [item]);

  return (
    <Card>
      <Link to={`character/${item.char_id}`}>
        <CardContent>
          <img src={item.img} />
          <h2>{item.name}</h2>
        </CardContent>
      </Link>
    </Card>
  );
};

export default CharacterItem;
