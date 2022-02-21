import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useStyles from './styles';
import Card from '@mui/material/Card';

export const Form = () => {
    const [postData, setPostData] = useState()
    const classes = useStyles();
    return (
        <Card className={classes.root}>

            <TextField className={classes.formElements}
                id="outlined-helperText"
                label="Creator"
                defaultValue="Your name"
            />
            <TextField className={classes.formElements}
                id="outlined-helperText"
                label="Title"
                defaultValue="Add title"
            />
            <TextField className={classes.formElements}
                id="outlined-helperText"
                label="Message"
                defaultValue="Post your message here"
            />
            <TextField className={classes.formElements}
                id="outlined-helperText"
                label="Tags"
            />
            <Button className={classes.formElements} variant="contained">SUBMIT</Button>
            <Button className={classes.formElements} variant="outlined">CLEAR</Button>
        </Card>

    )
}
