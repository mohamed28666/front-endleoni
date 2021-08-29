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


const styles = theme => ({

    spacing: 8,



});
const mystyle = {

    imagestyle: {
        width: "100%",
        height: "100%",
        position: "relative"
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

                <Box  width="10">
              
                    <Paper style={{ width: "300px", height: "105px" , }} elevation={10} >
                       
                        
                                <img style={mystyle.imagestyle } src={active} />
                                <Box mt={105/16} mx={"50%"}>
                                <Typography style={{position:"inherit"}}>AUDI</Typography>
                                </Box>
                         
                      


                    </Paper>
               
                </Box>
            </Container >
        );
    }

}