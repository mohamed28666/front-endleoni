import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { json } from 'body-parser';
import Cookies from 'js-cookie';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Avatar, Container } from '@material-ui/core';
import active from './active.png'
import stopped from './stopped.png'
import holded from './holded.png'
import Draggable from 'react-draggable'; // The default
import { DraggableCore } from 'react-draggable'; // <DraggableCore>


const styles = theme => ({

    spacing: 8,



});
const mystyle = {

    imagestyle: {
        width: "100%",
        height: "100%",
        position: "relative"
    },
    description: {
        position: "absolute",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    }


}

export default class Line extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};


    }
    async componentDidMount() {




    }
    componentWillUnmount() {

    }
    render() {
        return (

            <Container>

                <Box width="10">
                    <Draggable >


                        <Paper style={{ width: "300px", height: "105px", }} elevation={10} >
                            <img style={mystyle.imagestyle} src={active} />
                            <Box style={mystyle.description}>
                                <Typography >line number :{this.props.line_number}</Typography>
                                <Typography >RT_RATIO :{this.props.RT_RATIO}</Typography>
                                <Typography >A_DURATION :{this.props.A_DURATION}</Typography>
                                <Typography >D_DURATION :{this.props.D_DURATION}</Typography>
                            </Box>
                        </Paper>
                    </Draggable>
                </Box>
            </Container >
        );
    }

}