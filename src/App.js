import './App.css';
import { useState } from "react";

function App() {

  const [textColor, setTextColor] = useState("black");

  const toggleText = () => {
    setTextColor(textColor === "black" ? "red" : "black");
  };

  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  }

  const decreaseCount = () => {
    setCount(count - 1);
  }

  const setZero = () => {
    setCount(0);
  }

  return (
    <div className="App">
      <button onClick = {toggleText} >Change color</button>
      <h1 style={{color: textColor}}> HI MY NAME IS JASON</h1>

      <button onClick={increaseCount} >Increase</button>
      <button onClick={decreaseCount} >Decrease</button>
      <button onClick={setZero} >Set to Zero</button>
      {count}


    </div>
  );
}

export default App;
