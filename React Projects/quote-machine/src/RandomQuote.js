import React from "react";

export default function randomQuote() {
  const quote_storage = [
    {
      quote:
        "Life isn’t about getting and having, it’s about giving and being.",
      author: "Kevin Kruse",
    },
    {
      quote:
        "Whatever the mind of man can conceive and believe, it can achieve.",
      author: "Napoleon Hill",
    },
    {
      quote: "Strive not to be a success, but rather to be of value.",
      author: "Albert Einstein",
    },
    {
      quote:
        "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
      author: "Robert Frost",
    },
  ];

  const randomNum = Math.floor(Math.random() * quote_storage.length);
  return (
    <div>
      {quote_storage[randomNum].quote}
      <br></br>- {quote_storage[randomNum].author}
    </div>
  );
}
