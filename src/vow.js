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
export default class Line_main_query extends React.Component {

    constructor(props) {
        super(props);
        this.state = { line: "", length: "" };


    }
    async componentDidMount() {
        await axios.get('http://localhost:3333/lines').then(resp => {




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
            <Box my={2} display='inline-block'>
                <Line image={active}
                    START_TIME={element.START_TIME}
                    D_DURATION={element.D_DURATION}
                    A_DURATION={element.A_DURATION}
                    RT_RATIO={element.RT_RATIO}
                    DISPLAY_LINE={true}
                    state={element.STATE}
                    line_number={element.LINE_NUMBER}></Line ></Box>
        );
        return (


            <> 
               
                    <Box mt={50}>

                        <Paper style={{ width: "fit-content", height: "fit-content", MozPaddingEnd: "10px" }}>
                            <Container>
                                <Box my={-40} pb={3} >
                                    {component}
                                </Box>
                            </Container>
                        </Paper>
                    </Box>
            
            </>
        );
    }

}