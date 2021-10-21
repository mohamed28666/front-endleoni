import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { json } from 'body-parser';
import Cookies from 'js-cookie';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
var today = new Date();
function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

const styles = theme => ({

    spacing: 8



});
export default class Time extends React.Component {
    
    constructor(props) {
        super(props);      
        this.state = { time: addZero(today.getHours()) +':' + addZero(today.getMinutes()) +':'+ addZero(today.getSeconds()) ,
                       date : today.getDate() +'-'+today.getMonth()+'-'+ today.getFullYear() };
    }
    componentDidMount() {

        this.interval=setInterval( () => {
           today = new Date();
                this.setState({ time: addZero(today.getHours()) +':' + addZero(today.getMinutes()) +':'+ addZero(today.getSeconds()),date:
                addZero(today.getDate()) +'-'+addZero(today.getMonth()+1)+'-'+ addZero(today.getFullYear()) });
        },1000);
        

    }
    componentWillUnmount() {
       
      }
    render() {
        return (

            
                    <Paper elevation={15} style={{opacity:0.9 ,height:'fit-content'}}>
                        <Box   height={"fit-content"} >
                            <Typography align="center" variant="h7"display="block" > {this.state.time} </Typography>
                            <Typography align="center" display="block" variant="h7"> {this.state.date} </Typography>
                           
                        </Box>
                    </Paper>
              
        );
    }

}