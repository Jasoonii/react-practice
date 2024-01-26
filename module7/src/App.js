import './App.css';
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {

  //BASIC FETCH FROM API AND CONSOLE LOG DATA
  /*fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(data => console.log(data))*/

  const [catFact, setCatFact] = useState("");

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  }

  useEffect(() => {
    fetchCatFact();
  }, []);
  

  return (
    <div className="App">
      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p>{catFact}</p>
    </div>
  );
}

export default App;
