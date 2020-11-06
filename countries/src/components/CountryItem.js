import { Button, ListGroupItem } from 'react-bootstrap';
import React from 'react';
import { useHistory } from 'react-router-dom';


export default function CountryItem(props) {
    const history = useHistory();
    return (
        <ListGroupItem style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
            <h3>{props.country.name}</h3>
            <Button onClick={() => history.push(`/country/${props.country.code}`)}>Details</Button>
        </ListGroupItem>
    )
}