import React from "react";
import { useState, useEffect } from "react";
import { eachGame } from "../utilities/videoGames-services";
import { Card, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function VideoGamePage() {
  const { platform } = useParams();
  // console.log(platform);
  const [eachgame, seteachgame] = useState([]);

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
  }, [platform]);

  const gameList = eachgame.map((element) => {
    return (
      <Card style={{ width: "17rem" }} key={element._id} className="m-5">
        <Card.Img variant="top" src={`${element.image}`} />
        <Card.Body className="d-flex flex-column justify-content-center align-items-center">
          <Card.Title>{element.title}</Card.Title>
          <Card.Text>{element.genre}</Card.Text>
          <Card.Text>{element.console}</Card.Text>
          <Card.Text>{element.price}</Card.Text>
          <Button
            variant="info"
            onClick={() => {
              setCart([...cart, element]);
              console.log(cart);
            }}
          >
            Add to Cart
          </Button>
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
