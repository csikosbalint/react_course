import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieTile(props) {
    return (
        <div style={{
            borderStyle: 'groove',
            padding: '2rem',
            width: '115px'
        }}>
            {props.title}
        </div>
    )
}