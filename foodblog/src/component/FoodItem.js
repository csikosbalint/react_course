import React from 'react';
import { ListGroup } from 'react-bootstrap';

export default function FoodItem(props) {
    let href = `/food/${props.food.id}`
    return (
        <ListGroup.Item action href={href}>{props.food.name}</ListGroup.Item>
    )
}