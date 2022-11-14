import React from "react";
import { useState, useEffect } from "react";
import { eachGame } from "../utilities/videoGames-services";
import { Card, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function VideoGamePage({ cart, setCart }) {
  const { platform } = useParams();
  // console.log(platform);
  const [eachgame, seteachgame] = useState([]);
  const [refresh, setRefresh] = useState(false);

  //function to fetch game data
  const getGames = async () => {
    try {
      const response = await fetch(`/api/videogames/${platform}`);
      const data = await response.json();
      console.log(data.data.allGames);
      seteachgame(data.data.allGames);
    } catch (e) {
      console.error(e);
    }
  };
  // console.log(eachgame);

  useEffect(() => {
    getGames(platform);
  }, [platform, refresh]);

  const deleteGame = (id) => {
    axios.delete(`/api/videogames/${id}`);
    setRefresh(!refresh);
  };

  const gameList = eachgame.map((game) => {
    return (
      <Card style={{ width: "17rem" }} key={game._id} className="m-5">
        <Card.Img variant="top" src={`${game.image}`} />
        <Card.Body className="d-flex flex-column justify-content-center align-items-center">
          <Card.Title>{game.title}</Card.Title>
          <Card.Text>{game.genre}</Card.Text>
          <Card.Text>{game.console}</Card.Text>
          <Card.Text>{game.price}</Card.Text>
          <Container className="d-flex flex-row justify-content-center align-items-center">
            <Button
              variant="info"
              onClick={() => {
                setCart([...cart, game]);
                console.log(cart);
              }}
            >
              Add to Cart
            </Button>
            <Button
              onClick={() => {
                deleteGame(game._id);
              }}
              style={{ marginLeft: 5 }}
              variant="info"
            >
              Delete Game
            </Button>
          </Container>
        </Card.Body>
      </Card>
    );
  });
  return (
    <div>
      <Button as={Link} to="/newgame" style={{ marginTop: 20 }} variant="info">
        Add New Game
      </Button>
      <Container className="d-flex p-3 justify-content-evenly flex-wrap">
        {gameList}
      </Container>
    </div>
  );
}

export default VideoGamePage;
