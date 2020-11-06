import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import MovieTile from '../component/MovieTile';
import { getUpcomings } from '../actions'

function UpcomingMovies(props) {
    useEffect(() => {
        if (!props.upcomings) {
            props.getUpcomings()
        }
    }, [props])
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Upcoming Movies</h2>
            <hr />
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            { Array.isArray(props.upcomings) ? props.upcomings.map(movie => <MovieTile key={movie._id} movie={movie} />):<p>loading...</p>}
            </div>
        </div>
    )
}
const mapDispatchToProps = {
    getUpcomings: getUpcomings,
};

const mapStateToProps = (state) => {
    return (
        {
            upcomings: state.upcomings_reducer.upcomings    ,
            loading: state.upcomings_reducer.loading
        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingMovies)