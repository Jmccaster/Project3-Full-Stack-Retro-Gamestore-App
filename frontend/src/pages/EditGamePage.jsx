import React from "react";
import EditGame from "../components/EditGame";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function EditGamePage() {
  const params = useParams();

  const [game, setGame] = useState(null);

  useEffect(() => {
    axios.get(`/api/videogames/1/${params.gameId}`).then((response) => {
      setGame(response.data.data);
      console.log(game);
    });
  }, []);
  return <div>{game ? <EditGame game={game} /> : null}</div>;
}

export default EditGamePage;
