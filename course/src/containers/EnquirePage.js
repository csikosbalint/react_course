import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import EnquireItem from '../components/EnquireItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateEnquires, updateCourses } from './../actions'

function AnswerPage(props) {
    useEffect(() => {
        console.log('init only once')
        if ( !props.data?.courses ) {
            props.updateCourses()
        }
        if ( !props.data?.enquires ) {
            props.updateEnquires()
        } 
        return () => {
            console.log('cleanup')
        }
    }, []);
    return (
        <Grid container spacing={2} direction="column"
            justify="center"
            alignItems="stretch">
            {props.data.enquires && props.data.courses ? props.data.enquires.map(enquire =>
                <Grid item key={enquire.id}>
                    <EnquireItem course={props.data.courses.find(({ id }) => id === enquire.courseid)} question={enquire.question} name={enquire.name} />
                </Grid>)
                :
                <p>loading</p>}
        </Grid>)
}

function mapStateToProps(state) {
    console.log(state)
    return {
        data: {
            ...state.enquires,
            ...state.courses
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ updateEnquires, updateCourses }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerPage)