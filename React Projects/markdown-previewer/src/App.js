import React, { useState, useEffect } from "react";
import marked from "marked";

marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();

function App() {
  const [text, setText] = useState("");

  function Preview({ markdown }) {
    // the parameter used {} probebaly(?) because it accept props from JSX
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: marked(markdown, { renderer: renderer }),
        }}
      ></div>
    );
  }

  return (
    <div>
      <textarea onChange={(event) => setText(event.target.value)}></textarea>
      <Preview markdown={text} />
    </div>
  );
}

export default App;
