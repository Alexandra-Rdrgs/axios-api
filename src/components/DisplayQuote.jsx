import React from "react";

function DisplayQuote({ quote }) {
  return (
    quote && (
      <div className="displayQuote">
        <img src={quote.image} alt={quote.character} />
        <ul>
          <li className="quote">{quote.quote}</li>
          <li className="character">- {quote.character}</li>
        </ul>
      </div>
    )
  );
}

export default DisplayQuote;
