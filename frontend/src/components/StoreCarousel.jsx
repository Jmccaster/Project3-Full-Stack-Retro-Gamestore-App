import React from "react";
import { Carousel } from "react-bootstrap";

function StoreCarousel() {
  return (
    <div style={{ display: "block", width: 900, padding: 20, marginLeft: 210 }}>
      <h4>React-Bootstrap Carousel Component</h4>
      <Carousel>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/11e62ffb-3ee1-4d8c-b2b0-fa9fba112532/de78xk3-f193902a-780d-41c0-afb7-a98ce0eedc88.png/v1/fill/w_1192,h_670,q_70,strp/wallpaper_xbox_game_studios_noir_1920x1080_by_playbox36_de78xk3-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzExZTYyZmZiLTNlZTEtNGQ4Yy1iMmIwLWZhOWZiYTExMjUzMlwvZGU3OHhrMy1mMTkzOTAyYS03ODBkLTQxYzAtYWZiNy1hOThjZTBlZWRjODgucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ._wHzZm1x4w1EJXa5pGjX0T9mlp5qTV_b6UGKsvvSM-Y"
            alt="Image One"
          />
          <Carousel.Caption>
            <h3>Xbox Collection</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://wallpaperaccess.com/full/2520476.jpg"
            alt="Image Two"
            style={{ height: 485 }}
          />
          <Carousel.Caption>
            <h3>Nintendo Collection</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://pbs.twimg.com/media/EaNeNC-XsAAMZ3u.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Playstation Collection</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default StoreCarousel;
