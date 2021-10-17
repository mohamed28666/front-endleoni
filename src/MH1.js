import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { json } from 'body-parser';
import Cookies from 'js-cookie';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import active from './active.png'
import stopped from './stopped.png'
import holded from './holded.png'
import Line from './line';
import { Container } from '@material-ui/core';
import background from './background.jpg'
const styles = theme => ({

    spacing: 8



});
const mystyle = {


    centering: {

        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    }


}
export default class MH1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = { line: "", length: "" ,d:""};


    }
    async componentDidMount() {
        await axios.get('http://localhost:3333/mh1').then(resp => {




            this.setState({ line: resp.data });
            this.setState({ size: resp.data });
            console.log(this.state.line);

        });

        

    }
    componentWillUnmount() {
      
    }
    render() {
        let array = Object.values(this.state.line);
        const component = array.map(element =>
            <Box  style={{ width:'25%' }} mx={0} my={2} display='inline-block'>
                <Line  image={active}
                    START_TIME={element.START_TIME}
                    D_DURATION={element.D_DURATION}
                    A_DURATION={element.A_DURATION}
                    RT_RATIO={element.RT_RATIO}
                    DISPLAY_LINE={true}
                    state={element.STATE}
                    line_number={element.LINE_NUMBER}
                    V_type={element.V_Type}></Line ></Box>
        );
        return (


            <> 
               <Box my={7} >
               
                    

                        <Paper  style={{  width: "98%", height: "fit-content",marginRight:"auto",marginLeft:"auto"}}>
                        <Container><Box position="center"><Typography variant='h2'style={{textAlign:"center",color:"#1F52DC",textShadow: "1px 1px 2px #1F52DC, 0 0 1em #1F52DC, 0 0 0.6em #1F52DC"}}> MH1 PLANT</Typography></Box></Container>
                            <Container style={{maxWidth:'100%'}}>
                                
                                <Box mx={0} my={-1} pb={3} >
                                    {component}
                                </Box>
                            </Container>
                        </Paper>
                    
                
                    </Box>
            </>
        );
    }

}