import React, { useState, useEffect } from "react";

const symbols = ["*", "+", "/", "-"];

function App() {
  const [expressionDisplay, setDisplay] = useState("");
  const [answer, setAnser] = useState(0);

  function display(event) {
    if (expressionDisplay[expressionDisplay.length - 1] === "=") {
      if (symbols.includes(event) === true) {
        const withoutEqual = expressionDisplay;
        console.log("are we in?", withoutEqual);
        return setDisplay(withoutEqual.replace("=", event));
      }
      return setDisplay(event);
    }
    if (
      symbols.includes(expressionDisplay[0]) &&
      symbols.includes(event) &&
      expressionDisplay.length === 1
    ) {
      console.log("TEST");
      return setDisplay(event);
    }
    if (/[0-9]/.test(event)) {
      console.log("TEST1");
      return setDisplay((prev) => prev + event);
    } else if (
      /[.]/.test(expressionDisplay[expressionDisplay.length - 1]) !== true &&
      event === "."
    ) {
      console.log("TEST2");
      return setDisplay((prev) => prev + event);
    } else if (
      /[/+*]/.test(expressionDisplay[expressionDisplay.length - 1]) === true &&
      event === "-"
    ) {
      if (expressionDisplay[expressionDisplay.length - 1] !== "-") {
        console.log("TEST3");
        return setDisplay((prev) => prev + "-");
      }
    } else {
      if (
        ["+", "-", "*", "/"].includes(
          expressionDisplay[expressionDisplay.length - 1]
        ) === false
      ) {
        console.log("TEST4");
        return setDisplay((prev) => prev + event);
      }
    }
  }
  function calculate() {
    const theExpression = expressionDisplay;
    if (symbols.includes(expressionDisplay[expressionDisplay.length - 1])) {
      return setAnser(eval(theExpression.slice(0, theExpression.length - 1)));
    }
    setAnser(eval(expressionDisplay));
    setDisplay((prev) => prev + "=");
  }

  function displayClean(event) {
    if (event === "CA") {
      return setDisplay("");
    }
    let spliceDisplay = expressionDisplay;
    return setDisplay(spliceDisplay.slice(0, spliceDisplay.length - 1));
  }

  return (
    <div className="App">
      <div className="display">
        <input type="text" value={expressionDisplay} placeholder="0"></input>
        <div className="calculated">{answer}</div>
      </div>
      <div id="buttons">
        <button onClick={() => display("0")} id="zero">
          0
        </button>
        <button onClick={() => display("1")} id="one">
          1
        </button>
        <button onClick={() => display("2")} id="two">
          2
        </button>
        <button onClick={() => display("3")} id="three">
          3
        </button>
        <button onClick={() => display("4")} id="four">
          4
        </button>
        <button onClick={() => display("5")} id="five">
          5
        </button>
        <button onClick={() => display("6")} id="six">
          6
        </button>
        <button onClick={() => display("7")} id="seven">
          7
        </button>
        <button onClick={() => display("8")} id="eight">
          8
        </button>
        <button onClick={() => display("9")} id="nine">
          9
        </button>
        <button onClick={() => display("+")} id="add">
          +
        </button>
        <button onClick={() => display("-")} id="subtract">
          -
        </button>
        <button onClick={() => display("*")} id="multiply">
          *
        </button>
        <button onClick={() => display("/")} id="divide">
          /
        </button>
        <button onClick={() => display(".")} id="decimal">
          .
        </button>
        <button onClick={() => displayClean("CA")} id="clear">
          CA
        </button>
        <button onClick={() => displayClean("C")} id="clear">
          C
        </button>
        <button onClick={() => calculate("=")} id="clear">
          =
        </button>
      </div>
    </div>
  );
}

export default App;
