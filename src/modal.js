import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { json } from 'body-parser';
import Cookies from 'js-cookie';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({

    spacing: 8



});
export default class Time extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { };


    }
    async componentDidMount() {


        

    }
    componentWillUnmount() {
       
      }
    render() {
        return (

            
                    <Paper elevation={15} >
                        <Box m={1} >
                            <Typography align="center" display="block" variant="p"> Temperature :   °C </Typography>
                            <Typography align="center" display="block" variant="p">Humidité :       % </Typography>
                        </Box>
                    </Paper>
              
        );
    }

}