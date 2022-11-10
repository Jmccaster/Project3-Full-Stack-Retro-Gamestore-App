// All products page
import React from "react";
import { useState, useEffect } from "react";
import { allGames } from "../utilities/videoGames-services";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Container } from "react-bootstrap";

function AllGames() {
  const [games, setgames] = useState({});
  const getallGames = async (e) => {
    const gamesall = await allGames();
    console.log(gamesall);
    setgames({
      list: gamesall.data.allGames,
    });
  };
  useEffect(() => {
    getallGames();
  }, []);

  //   console.log(games.list);

  const gameList = games.list
    ? games.list.map((element) => {
        return (
          <Card style={{ width: "17rem" }} key={element._id} className="m-5">
            <Card.Img variant="top" src={element.image} />
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
              <Card.Title>{element.title}</Card.Title>
              <Card.Text>{element.genre}</Card.Text>
              <Card.Text>{element.console}</Card.Text>
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
      })
    : [];

  return (
    <div>
      <Container className="d-flex p-3 justify-content-center flex-wrap">
        {gameList}
      </Container>
    </div>
  );
}
export default AllGames;
