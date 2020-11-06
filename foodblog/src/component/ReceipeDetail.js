import React from 'react';
import { Table } from 'react-bootstrap';

export default function ReceipeDetail(props) {
    let ingredients = [];
    Object.keys(props.receipe.ingredients)
        .forEach(key => {
            console.log(key)
            ingredients.push(
                <tr>
                    <td>{key}</td>
                    <td>{props.receipe.ingredients[`${key}`]}</td>
                </tr>
            );
        })
    return (
        <div>
            <p>{props.receipe.details}</p>
            <p>{JSON.stringify(Object.keys(props.receipe.ingredients)["wheat flour"])}</p>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Ingredient</th>
                        <th>Volume</th>
                    </tr>
                </thead>
                <tbody>
                    {ingredients}
                </tbody>
            </Table>
        </div>
    )
}