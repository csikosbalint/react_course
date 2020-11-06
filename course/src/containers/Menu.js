import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        marginBottom: '2rem'
    },
});

export default function Menu(props) {
    const nav = ["courses", "enquires"];
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const history = useHistory();

    useEffect( () => {
        setValue(nav.indexOf(window.location.pathname.substring(1)))
    }, [nav, setValue]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        history.push(nav[newValue])
    };
    return (
        <Paper className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                {nav.map( item => <Tab label={item} />)}
            </Tabs>
        </Paper>
    )
}