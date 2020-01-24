import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
    Card, CardBody, CardSubtitle, Col, CardHeader
} from 'reactstrap';

import '../StarWars.css';


const CardContainer = (props) => {
    const [homeworld, setHomeworld] = useState([]);
    const [species, setSpecies] = useState([]);

    useEffect(() => {
    axios.get(props.homeworld)
      .then(res => {
        setHomeworld(res.data.name)
      })
      .catch(err => {
        console.error("You are getting an error of: ", err);
      })
    }, [props.homeworld])

    useEffect(() => {
        axios.get(props.species)
            .then(res => {
                setSpecies(res.data.name)
            })
            .catch(err => {
                console.error("You are getting an error of: ", err);
            })
    }, [props.species])

    return (
        <Col>
            <Card className="starwars-card">
                <CardHeader className="title"><h2>{props.name}</h2></CardHeader>
                <CardBody>
                    <CardSubtitle>Home World: {homeworld}</CardSubtitle>
                    <CardSubtitle>Species: {species}</CardSubtitle>    
                    <br/>
                    <CardSubtitle>Birth Year: {props.birthyear}</CardSubtitle>
                </CardBody>
            </Card>
        </Col>
    );
};

export default CardContainer;