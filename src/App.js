import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom'
import ReactGiphySearchbox from 'react-giphy-searchbox'
var YOUR_API_KEY= "api.giphy.com/v1/gifs/search"
const App = () => (
  <ReactGiphySearchbox
    apiKey="YOUR_API_KEY"
    onSelect={item => console.log(item)}
    masonryConfig={[
      { columns: 2, imageWidth: 110, gutter: 5 },
      { mq: '700px', columns: 3, imageWidth: 110, gutter: 5 },
    ]}
  />
)
render(<App />, document.getElementById("root"))
export default App;
