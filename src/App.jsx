import React from "react";
import DisplayQuote from "./components/DisplayQuote";
import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const sampleQuote = {
    quote:
      "By chilling my loins I increase the chances of impregnating my wife.",
    character: "Apu Nahasapeemapetilon",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
    characterDirection: "Left",
  };
  const [quote, setQuote] = useState(sampleQuote);

  const getQuote = () => {
    // Send the request
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        console.log(data); //Check the data
        setQuote(data[0]);
      });
  };

  return (
    <div className="app">
      <DisplayQuote quote={quote} />
      <button type="button" onClick={getQuote}>
        Get quote
      </button>
    </div>
  );
}

export default App;
