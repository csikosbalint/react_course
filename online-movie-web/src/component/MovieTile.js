import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieTile(props) {
    return (
        <div style={{
            borderStyle: 'groove',
            padding: '2rem',
            width: '115px'
        }}>
            <Link to={`/movie/${props.movie._id}`}>{`${props.movie.name}`}</Link>
            <div style={{
                borderStyle: 'groove',
                borderRadius: '5px'
            }}>
            <Link to={`/ticket/${props.movie._id}`}>Book</Link>
            </div>
        </div>
    )
}