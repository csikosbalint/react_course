import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import MovieTile from '../component/MovieTile';
import { getLatest } from './../actions'

function LatestMovies(props) {
    useEffect(() => {
        if (!props.latest) {
            props.getLatest()
        }
    }, [props])
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Latest Movies</h2>
            <hr />
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            { Array.isArray(props.latest) ? props.latest.map(movie => <MovieTile key={movie._id} movie={movie} />):<p>loading...</p>}
            </div>
        </div>
    )
}
const mapDispatchToProps = {
    getLatest: getLatest,
};

const mapStateToProps = (state) => {
    return (
        {
            latest: state.latest_reducer.latest,
            loading: state.latest_reducer.loading
        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(LatestMovies)