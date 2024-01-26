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
  const [excuse, setExcuse] = useState("");
  const [excuseCategory, setExcuseCategory] = useState("")

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

  const fetchExcuse = () => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuseCategory}`).then((res) => {
      setExcuse(res.data[0].excuse);
    })
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

      <h1>Generate an Excuse</h1>
      <button onClick={() => { setExcuseCategory("party"); fetchExcuse() }}>Party</button>
      <button onClick={() => { setExcuseCategory("family"); fetchExcuse() }}>Family</button>
      <button onClick={() => { setExcuseCategory("office"); fetchExcuse() }}>Office</button>
      <p>Generated Excuse: {excuse}</p>
    </div>
  );
}

export default App;
