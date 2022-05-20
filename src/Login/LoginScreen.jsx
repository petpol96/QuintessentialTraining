import React, { useState } from "react";
import Background from "./Background";
import "./Css/LoginPage.css";

function LoginScreen(props) {
  return (
    <div className="LoginScreen">
      <Background></Background>
      <div className="LoginInputs">
        <h1 className="LoginHeader">ΣΥΝΔΕΣΗ</h1>

        <span
          className="LoginTextAboveInput"
          style={{ left: "68px", top: "123px", width: "271px" }}
        >
          Δ/νση ηλεκτρονικού ταχυδρομείου¨
        </span>
        <input
          type="text"
          className="LoginInputBorder"
          placeholder="john.doe@example.com"
          style={{ left: "2px", top: "156px" }}
        />

        <span
          className="LoginTextAboveInput"
          style={{ left: "126px", top: "248px", width: "155px" }}
        >
          Κωδικός πρόσβασης
        </span>
        <input
          type="password"
          className="LoginInputBorder"
          style={{
            left: "2px",
            top: "286px",
          }}
          placeholder='●●●●●●●●●●●●●●'
        />

        <button className="LoginButton">Είσοδος</button>
        <span className="LoginPasswordReset">Ξέχασα τον κωδικό μου </span>
      </div>
    </div>
  );
}

export default LoginScreen;
