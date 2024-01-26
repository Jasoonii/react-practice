import './App.css';
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {

  //BASIC FETCH FROM API AND CONSOLE LOG DATA
  /*fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(data => console.log(data))*/

  const [catFact, setCatFact] = useState("");
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(0);

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  }

  const fetchAge = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedAge(res.data.age)
    });
    
  }

 /* useEffect(() => {
    fetchCatFact();
  }, []);*/
  

  return (
    <div className="App">
      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p>{catFact}</p>

      <input 
        placeholder="Enter Name" 
        onChange={(event) => {setName(event.target.value)}} 
      />

      <button onClick={fetchAge}>Predict Age</button>
      <h1>Predicted Age: {predictedAge}</h1>
    </div>
  );
}

export default App;
