import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import EventTile from './../component/EventTile'
import { getEvents } from './../actions/index'

function NearByEvents(props) {
    //http://3.134.99.170:4000/events
    useEffect(() => {
        if (!props.events) {
            props.getEvents()
        }
    }, [props])
    return(
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{textAlign: 'center'}}>
                <p>Events</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
            { Array.isArray(props.events) ? props.events.map(e => <EventTile title={e.name}/>) : <p>loading...</p>}
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    getEvents: getEvents,
};

const mapStateToProps = (state) => {
    return (
        {
            events: state.events_reducer.events,
            loading: state.events_reducer.loading
        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(NearByEvents)