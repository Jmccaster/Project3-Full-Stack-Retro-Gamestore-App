import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function Create() {
  return (
    <div class="form-wrapper">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Game Title</Form.Label>
          <Form.Control type="text" placeholder="Enter title." name="title" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Genre</Form.Label>
          <Form.Control type="text" placeholder="Enter genre." name="genre" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="textarea"
            placeholder="Enter description of game."
            name="description"
          />
        </Form.Group>{" "}
        <Form.Group className="mb-3">
          <Form.Label>Console</Form.Label>
          <Form.Control
            type="text"
            placeholder="What console is this for?"
            name="console"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="Provide a link of a picture of the game."
            name="image"
          />
        </Form.Group>{" "}
        <Form.Group className="mb-3" controlId="formBasicCheckBox">
          <Form.Label>Availability</Form.Label>
          <Form.Check type="checkbox" />
        </Form.Group>
        <Button variant="primary" type="submit" value="Create Game">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Create;
