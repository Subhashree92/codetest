import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import ReactGiphySearchbox from "react-giphy-searchbox";
const App = () => (
  <>
    <header>
      <h1>React Giphy Searchbox</h1>
      <p>
        Select a gif 
      </p>
    </header>
    <div className="searchboxWrapper">
      <ReactGiphySearchbox
        apiKey="9Ixlv3DWC1biJRI57RanyL7RTbfzz0o7"
        onSelect={item => console.log(item)}
        masonryConfig={[
          { columns: 2, imageWidth: 140, gutter: 10 },
          { mq: '700px', columns: 3, imageWidth: 200, gutter: 10 },
          { mq: '1000px', columns: 3, imageWidth: 220, gutter: 10 },
        ]}
      />
    </div>
    <footer>
        <span>Github</span>
    </footer>
  </>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
