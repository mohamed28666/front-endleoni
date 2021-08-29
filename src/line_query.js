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

const styles = theme => ({

    spacing: 8



});
export default class Line_main_query extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { line:"",length:""};


    }
    async componentDidMount() {
        await axios.get('http://localhost:3333/lines').then(resp => {

            this.setState({ line: resp.data });
            this.setState({ size: resp.data.length });
            console.log(this.state.line);

        });

        

    }
    componentWillUnmount() {
       
      }
    render() {
        let array = Object.values(this.state.line);
        const component = array.map(element =>
            <Line image ={active}  D_DURATION={"5min"}A_DURATION={"2h:30min"} RT_RATIO={"15.3"} DISPLAY_LINE ={true} state={"1"} line_number={element.LINE_NUMBER}></Line >
        );
        return (

            
                <>
                
                       {component}
                     
              </>
        );
    }

}