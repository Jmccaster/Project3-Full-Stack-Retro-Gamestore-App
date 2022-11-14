import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container } from "react-bootstrap";
import { getUserId } from "../utilities/users-service";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./../style.css";

function CartPage({ cart, setCart }) {
  function handleLoadPaymentData(paymentData) {
    console.log("load payment data", paymentData);
  }
  const handleRemove = (element) => {
    const arr = cart.filter((item) => item.title !== game.title);
    setCart(arr);
  };

  const navigate = useNavigate();
  const id = getUserId();
  const gameList = cart
    ? cart.map((game) => {
        return (
          <>
            <div className="cartcomponents">
              <div className="cartnamedisplay">{game.title}</div>
              <div>{game.console}</div>
              <div>${game.price}</div>

              <button className="cartbutton" onClick={() => handleRemove(game)}>
                Remove
              </button>

              <br />
            </div>
            <br />
          </>
        );
      })
    : [];

  useEffect(() => {
    if (!id) {
      navigate("/login");
    }
  }, [id]);

  const load = () => {
    return (
      <>
        <br />
        <br />
        <h4> </h4>
        <br />
        <div>
          <div>{gameList}</div>
        </div>
        <h2>
          Total Price: $
          {cart.reduce((total, game) => total + parseInt(game.price), 0)}
        </h2>
        <br /> <br />
        <a href="/payments" className="button">
          Proceed to Check Out
        </a>
        <br />
        <br />
        <h5> Payment Method</h5>
        {/* <div className="buttons">
          <GooglePayButton
            buttonType="short"
            paymentRequest={paymentRequest}
            onLoadPaymentData={handleLoadPaymentData}
          />
        </div> */}
        <br />
      </>
    );
  };
  const loading = () => {
    return (
      <>
        <br />
        <br />
        <h4> </h4>
        <br />
        <div>
          <div>{gameList}</div>
        </div>
        <h2>Cart is empty</h2>
        <br /> <br />
        <a href="/" className="button">
          Continue Shopping
        </a>
        <br />
        <br />
        <br />
      </>
    );
  };

  return cart.length > 0 ? load() : loading();
}

export default CartPage;
