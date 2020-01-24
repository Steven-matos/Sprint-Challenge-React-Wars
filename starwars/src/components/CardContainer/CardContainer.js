import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Col
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
            <Card>
                <CardBody>
                    <CardTitle>{props.name}</CardTitle>
                    <CardSubtitle>{homeworld}</CardSubtitle>
                    <CardSubtitle>{props.birthyear}</CardSubtitle>
                    <CardSubtitle>{species}</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default CardContainer;