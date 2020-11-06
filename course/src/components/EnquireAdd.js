import { Button, Grid, TextField } from '@material-ui/core'
import React, { useState } from 'react'

export default function Enquire(props) {
    const [name, setName] = useState();
    const [question, setQuestion] = useState();

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleQuestionChange = (event) => {
        setQuestion(event.target.value)
    }

    const handleSubmit = () => {
        console.log(`${name} + ${question} + ${props.courseid}`)
        if ( !name || !question ) {
            return
        }
        window.document.getElementById(`name-${props.courseid}`).value = null
        window.document.getElementById(`question-${props.courseid}`).value = null
        fetch(`http://localhost:8900/enquires`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    {
                        name: name,
                        question: question,
                        courseid: props.courseid
                    }
                )
            }
        )
        .then(resp => resp.json)
        .then(json => console.log(json))

    }
    return (
        <div style={{ width: "-webkit-fill-available" }}>
            <Grid container direction="row"
                alignItems="stretch" justify="center" spacing={2}>
                <Grid item xs={2}><TextField id={`name-${props.courseid}`} label="Name" multiline fullWidth={true} onChange={handleNameChange} /></Grid>
                <Grid item xs={6}><TextField id={`question-${props.courseid}`} label="Question..." multiline fullWidth={true} onChange={handleQuestionChange} /></Grid>
                <Grid item xs={4}><Button id={`button-${props.courseid}`} type="submit" size="small" fullWidth={true} variant="contained" color="primary" onClick={handleSubmit}>Enquire</Button></Grid>
            </Grid>
        </div>
    )
}