import React, {useState, useEffect}  from 'react';
import axios from 'axios'
import './App.css';
import CardContainer from './components/CardContainer/CardContainer';
import { Container, Row } from 'reactstrap';


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

  console.log("This is the characters info:", character)

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Container className="themed-container" fluid="sm">
        <Row xs="4">
          {character.map(data => {
            return(
              <CardContainer 
                key={data.url}
                name={data.name}
                birthyear={data.birth_year}
                homeworld={data.homeworld}
                species={data.species}
            />
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
