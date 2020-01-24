import React, {useState, useEffect}  from 'react';
import axios from 'axios'
import './App.css';
import CardContainer from './components/CardContainer/CardContainer';

const App = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.co/api/people/")
      .then(res => {
        console.log(res.data)
        setCharacter(res.data.results)
      })
      .catch(err => {
        console.error("You are getting an error of: ", err);
      })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CardContainer />
    </div>
  );
}

export default App;
