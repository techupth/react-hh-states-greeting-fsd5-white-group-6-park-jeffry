import "./App.css";
import { useState } from "react";

function App() {
  const [greetingMessage, setGreetingMessage] = useState("Greeting Message");
  const setHelloTH = () => {
    setGreetingMessage("ขอตังหน่อย!");
  };
  const setHelloEN = () => {
    setGreetingMessage("Hey!");
  };
  const setHelloCN = () => {
    setGreetingMessage("Haiyaaaa!");
  };
  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="buttons">
        <button onClick={setHelloTH}>สวัสดี!</button>
        <button onClick={setHelloEN}>Hi!</button>
        <button onClick={setHelloCN}>你好!</button>
      </div>
    </div>
  );
}

export default App;
