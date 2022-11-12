import React from "react";
import { useState, useEffect } from "react";
import { Card, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";

function ConsolePage() {
  const { platform } = useParams();
  // console.log(platform);
  const [eachconsole, seteachconsole] = useState([]);

  //function to fetch game data
  const getConsoles = async () => {
    try {
      const response = await fetch(`/api/consoles/${platform}`);
      const data = await response.json();
      console.log(data.data.allConsoles);
      seteachconsole(data.data.allConsoles);
    } catch (e) {
      console.error(e);
    }
  };
  // console.log(eachgame);

  useEffect(() => {
    getConsoles(platform);
  }, [platform]);

  const consoleList = eachconsole.map((element) => {
    return (
      <Card style={{ width: "17rem" }} key={element._id} className="m-5">
        <Card.Img variant="top" src={`${element.image}`} />
        <Card.Body className="d-flex flex-column justify-content-center align-items-center">
          <Card.Title>{element.name}</Card.Title>
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
      {" "}
      <Container className="d-flex p-3 justify-content-evenly flex-wrap">
        {consoleList}
      </Container>
    </div>
  );
}

export default VideoGamePage;
