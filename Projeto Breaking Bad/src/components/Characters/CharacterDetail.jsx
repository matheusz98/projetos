import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "../Button/Button";
import axios from "axios";
import {
  CharacterDetailContainer,
  CharacterDetailContent,
  CharacterImg,
  CharacterInfo,
  BtnContent,
} from "./CharacterDetailStyle";
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
    <CharacterDetailContainer>
      {details.map((detail) => (
        <CharacterDetailContent key={detail.char_id}>
          <CharacterImg>
            <img src={detail.img} alt={detail.name} />
          </CharacterImg>
          <CharacterInfo>
            <ul>
              <li>
                <h2>{detail.name}</h2>
              </li>

              <li>
                <p>Birthday: {detail.birthday}</p>
              </li>

              <li>
                <p>Occupation: {detail.occupation} </p>
              </li>

              <li>
                <p>Status: {detail.status} </p>
              </li>

              <li>
                <p>
                  Seasons where {detail.name} appears: Season{" - "}
                  {detail.appearance}
                </p>
              </li>

              <li>
                <p>Portrayed by {detail.portrayed}</p>
              </li>
            </ul>

            <BtnContent>
              <Button primary white>
                <Link to="/" style={{ color: "#ffffff" }}>
                  Back to Characters
                </Link>
              </Button>
            </BtnContent>
          </CharacterInfo>
        </CharacterDetailContent>
      ))}
    </CharacterDetailContainer>
  );
};

export default CharacterDetail;
