import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ProductItem = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.product.src} />
            <Card.Body>
                <Card.Title>{props.product.name}</Card.Title>
                <Card.Text>{props.product.details}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductItem;