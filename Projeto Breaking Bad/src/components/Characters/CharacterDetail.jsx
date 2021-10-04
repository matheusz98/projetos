import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {} from "./CharacterDetailStyle";
import Loading from "../Loading/Loading";

const CharacterDetail = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const { char_id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const dataResult = await axios(
        `https://www.breakingbadapi.com/api/characters/${char_id}`
      );
      setDetails(dataResult.data);
      setLoading(false);
    };

    getData();
  }, [char_id]);

  return loading ? (
    <Loading />
  ) : (
    <div>
      {details.map((detail) => (
        <div key={detail.char_id}>
          <h2>{detail.name}</h2>
          <img src={detail.img} />
          <p>{detail.birthday}</p>
          <p>{detail.nickname}</p>
        </div>
      ))}
    </div>
  );
};

export default CharacterDetail;
