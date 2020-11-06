import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import Course from './../components/Course'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateCourses } from './../actions'

function CoursePage(props) {

    useEffect(() => {
        if ( !props.data?.courses ) {
            props.updateCourses()
        }
        console.log('init only once')
        return () => {
            console.log('cleanup')
        }
    }, []);
    return (
        <div>
            <Grid container spacing={2} direction="column"
                justify="center"
                alignItems="stretch">
                {props.data.courses ? props.data.courses.map(course => <Grid item key={course.id}><Course cid={course.id} title={course.title} desc={course.details} /></Grid>) : <p>loading</p>}
            </Grid>
        </div>
    )
}

function mapStateToProps(state) {
    console.log(state)
    return {
        data: {
            ...state.courses
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ updateCourses }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage)