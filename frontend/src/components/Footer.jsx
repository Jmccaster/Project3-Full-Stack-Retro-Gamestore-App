//Foot.jsx
import React from "react";
import "./../footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="main-footer">
      {/* <h1>Footer</h1> */}
      <div className="container">
        <div className="row">
          {/* // column1 */}
          <div className="col">
            <h4>Retro-Gaming Rental Store INC</h4>
            <ul className="list-unstyled">
              <li>281-330-8004</li>
              <li>Location: Every Where Near YOU, USA</li>
              <li>123 Street Around The Corner</li>
            </ul>
          </div>
          {/* // column2 */}
          <div className="col">
            <h4>Jibril Links</h4>
            <ul className="list-unstyled">
              <a href="https://github.com/Jmccaster" style={{ color: "white" }}>
                GitHub
              </a>
              <br />
              <a
                href="https://www.linkedin.com/in/jibrilmccaster/"
                style={{ color: "white" }}
              >
                LinkedIn
              </a>
            </ul>
          </div>
          {/* // column3 */}
          <div className="col">
            <h4>Some More Stuff</h4>
            <ul className="list-unstyled">
              <li>Games</li>
              <li>More Games</li>
              <li>A lot of Games</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Retro-Gaming Rental Store INC | All
            Rights Reserved | Terms of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
