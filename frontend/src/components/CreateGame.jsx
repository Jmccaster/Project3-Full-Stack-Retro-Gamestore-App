import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { createGame } from "../utilities/videoGames-services";

function Create() {
  //Create states for create video game component.
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [console, setConsole] = useState("");
  const [platform, setPlatform] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [gameCheckedOut, setGameCheckedOut] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  //// Create a handle change method to keep track of changes inside the form
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleConsoleChange = (e) => {
    setConsole(e.target.value);
  };
  const handlePlatformChange = (e) => {
    setPlatform(e.target.value);
  };
  const handleImageChange = (e) => {
    setImage(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleGameCheckedOutChange = () => {
    setGameCheckedOut(!gameCheckedOut);
  };
  const handleErrorChange = (e) => {
    setError(e.target.value);
  };

  // Create a function to handle form submission
  const handleFormSubmission = async (e) => {
    e.preventDefault();

    // Retrieve state
    const state = {
      title,
      genre,
      description,
      console,
      platform,
      price,
      image,
      gameCheckedOut,
    };

    try {
      // Make a copy of our data
      // console.log(state);
      const gameData = { ...state };

      // console.log(gameData);

      // Send the data to our backend
      const game = await createGame(gameData);

      // Log the data to the console
      // console.log(game.data);
      navigate(`/api/videogames/${platform}`);
    } catch (error) {
      // alert(error);
      setError("Failed - Try Again");
    }
  };

  return (
    <div className="form-wrapper">
      <Form
        className="gameForm"
        autoComplete="on"
        onSubmit={(e) => {
          return handleFormSubmission(e);
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label>Game Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title."
            name="title"
            onChange={(e) => {
              return handleTitleChange(e);
            }}
            value={title}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Genre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter genre."
            name="genre"
            onChange={(e) => {
              return handleGenreChange(e);
            }}
            value={genre}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="textarea"
            placeholder="Enter description of game."
            name="description"
            onChange={(e) => {
              return handleDescriptionChange(e);
            }}
            value={description}
            required
          />
        </Form.Group>{" "}
        <Form.Group className="mb-3">
          <Form.Label>Console</Form.Label>
          <Form.Control
            type="text"
            placeholder="What console is this for?"
            name="console"
            onChange={(e) => {
              return handleConsoleChange(e);
            }}
            value={console}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter price"
            name="price"
            onChange={(e) => {
              return handlePriceChange(e);
            }}
            value={price}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Platform</Form.Label>
          <Form.Control
            type="text"
            placeholder="What platform is this on?"
            name="platform"
            onChange={(e) => {
              return handlePlatformChange(e);
            }}
            value={platform}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="Provide a link of a picture of the game."
            name="image"
            onChange={(e) => {
              return handleImageChange(e);
            }}
            value={image}
            required
          />
        </Form.Group>{" "}
        <Form.Group className="mb-3" controlId="formBasicCheckBox">
          <Form.Label>Availability</Form.Label>
          <Form.Check
            type="checkbox"
            onChange={(e) => {
              return handleGameCheckedOutChange(e);
            }}
            value={gameCheckedOut}
            required
          />
        </Form.Group>
        <Button variant="info" type="submit" style={{ marginBottom: 5 }}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Create;
