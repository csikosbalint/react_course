import React, { useState } from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import ReceipeDetail from './ReceipeDetail';

export default function FoodDetail(props) {
    const [showReceipe, setShowReceipe] = useState(false)
    const history = useHistory();
    const toggleReceipe = () => {
        let actual = showReceipe;
        setShowReceipe(!actual)
    }
    return (
        <>
            <Jumbotron style={{ height: "500px" }}>
                <h1>{props.food.name}</h1>
                <p>{props.food.details}</p>
                <div>
                    {showReceipe ? <div><Button variant="primary" onClick={toggleReceipe}>Hide receipe!</Button><ReceipeDetail receipe={props.food.receipe} /></div> : <Button variant="primary" onClick={toggleReceipe}>Show receipe!</Button>}
                </div>
            </Jumbotron>
            <div style={{ textAlign: "center" }}>
                <Button variant="primary" onClick={() => { history.push("/") }}>Back!</Button>
            </div>
        </>
    )
}