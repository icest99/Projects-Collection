import React, { useState, useEffect } from "react";
import RandomQuote from "./RandomQuote";

function App() {
  const [current_quote, setQuote] = useState("");

  useEffect(() => {
    setQuote(RandomQuote);
  }, []);

  console.log(current_quote, "this");
  function newQuote() {
    setQuote(RandomQuote);
  }

  return (
    <div id="quote-box">
      <div id="text">{current_quote}</div>
      <div id="author"></div>
      <button id="new-quote" onClick={newQuote}>
        New Quote
      </button>
      <a
        id="tweet-quote"
        target="_blank"
        href={"https://twitter.com/intent/tweet/?text=$(current_quote)"}
      >
        tweet
      </a>
    </div>
  );
}

export default App;
