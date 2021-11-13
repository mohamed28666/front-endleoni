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
var Time = 120 //time for refreshing 
export default class RefreshPage extends React.Component {
    
    constructor(props) {
        super(props);      
        this.state = { time: Time+'S'
                        };
    }
    componentDidMount() {
      
        this.interval=setInterval( () => {
           
    
            this.interval1=setInterval( () => {
                


               
                     window.location.reload();
          
             },Time*1000);

           today = new Date();
                this.setState({ time: Time -this.interval1 +3 +'S'});
           

        },1000);
        
        

    }
    componentWillUnmount() {
       
      }
    render() {
        return (

            
                    <Paper elevation={15} style={{opacity:0.9 ,height:'fit-content'}}>
                        <Box   height={"fit-content"} >
                            <Typography align="center" variant="h4"display="block" > {this.state.time} </Typography>
                            <Typography align="center" display="block" variant="h4"> {this.state.date} </Typography>
                           
                        </Box>
                    </Paper>
              
        );
    }

}