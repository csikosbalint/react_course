import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { connect } from 'react-redux';
import { getLatest } from '../actions';
import MovieTile from '../component/MovieTile';

function Welcome(props) {
    useEffect(() => {
        if (!props.latest) {
            props.getLatest()
        }
    }, [props])
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <Link to="/latest" style={{ float: 'left' }}>Latest Movies</Link>
                <Link to="/upcoming" style={{ float: 'left' }}>Upcoming Movies</Link>
                <Link to="/events" style={{ float: 'left' }}>Nearby Events</Link>
            </div>
            <hr />
            <div>
                <Carousel>
                    {Array.isArray(props.latest)
                        ? props.latest.map(movie =>
                            <div style={{ justifyContent: 'center', textAlign: '-webkit-center' }}>
                                <div style={{ height: 250, width: 100 }}>
                                    <img src={movie.imageUrl} style={{ maxHeight: 250, width: 200 }} />
                                </div>
                            </div>)
                        : <div style={{ justifyContent: 'center', textAlign: '-webkit-center' }}>
                            <div style={{ height: 250, width: 100 }}>
                            </div>
                        </div>
                    }
                </Carousel>
            </div>
            <hr width="100%" />

            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                <p>Recommended Movies</p>
                <hr width="100%" />
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    {Array.isArray(props.latest) ? props.latest.map(movie => <MovieTile key={movie._id} movie={movie} />) : <p>loading...</p>}
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)