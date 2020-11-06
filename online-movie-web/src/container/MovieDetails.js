import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function MovieDetails() {
    const [movie, setMovie] = useState()
    let { id } = useParams()
    
    useEffect(() => {
        console.log(`http://3.134.99.170:4000/latest/${id}`)
        Axios
            .get(`http://3.134.99.170:4000/latest/${id}`)
            .then(resp => {
                setMovie(resp.data)
                console.log(resp.data)
            })
    }, [id])
    return (
        <>
            {movie?.name ?
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <div>
                            <img src={`${movie.imageUrl}`} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <p>{`${movie.name}`} ({movie.type})</p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <p>Rating: {`${movie.rate}`}</p>
                            </div>
                        </div>
                    </div>
                    <hr style={{ width: '100%' }} />
                    <div style={{ textAlign: 'center' }}>
                        <Link to={`/ticket/${id}`}>Book Now</Link>
                    </div>
                    <hr style={{ width: '100%' }} />
                </div>
                :
                <p>loading</p>}
        </>
    )
}