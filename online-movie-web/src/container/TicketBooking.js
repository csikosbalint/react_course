import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function TicketBooking() {
    const [movie, setMovie] = useState()
    const [timing, setTiming] = useState('15:00')
    const [date, setDate] = useState(new Date().toISOString().split('T')[0])
    const [seats, setSeats] = useState(1)

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
    const handleTimings = time => {
        setTiming(time)
    }

    const handleSeats = seats => {
        setSeats(seats)
    }
    
    const handleDate = date => {
        setDate(date)
    }

    return (
        <>
            {movie?.name ?
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ textAlign: 'center' }}>
                        <p>Date</p>
                        <input type="date" defaultValue={date}
                            onChange={(event) => handleDate(event.target.value)} />
                    </div>
                    <hr style={{ width: '100%' }} />
                    <div style={{ textAlign: 'center' }}>
                        <p>Available Show Timings</p>
                        <form>
                            <input
                                name="timing"
                                onChange={(event) => handleTimings(event.target.value)}
                                type="radio" id="15" value="15:00" 
                                checked/>
                            <label for="15">15:00</label>
                            <br />
                            <input
                                name="timing"
                                onChange={(event) => handleTimings(event.target.value)}
                                type="radio" value="17:00" id="17" />
                            <label for="17">17:00</label>
                            <br />
                            <input name="timing"
                                onChange={(event) => handleTimings(event.target.value)}
                                type="radio" value="19:00" id="19" />
                            <label for="19">19:00</label>
                            <br />
                        </form>
                    </div>
                    <hr style={{ width: '100%' }} />
                    <div style={{ textAlign: 'center' }}>
                        <p>Choose Number of Seats</p>
                        <input
                            type="number"
                            onChange={(event) => handleSeats(event.target.value)}
                            min="1" max="5" defaultValue="1" />
                    </div>
                    <hr style={{ width: '100%' }} />
                    <div style={{ textAlign: 'center' }}>
                        <Link to={`/payment/${id}?movie=${movie.name}&date=${date}&seats=${seats}&timing=${timing}`}>Book</Link>
                    </div>
                    <hr style={{ width: '100%' }} />
                </div>
                :
                <p>loading</p>}
        </>
    )
}