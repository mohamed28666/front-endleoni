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
import CustomizedTables from './table';

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
        top: "10%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    }


}

export default class Line extends React.Component {

    constructor(props) {
        super(props);
        this.state = { image: '', defaultPosition: {} };


    }
    async componentDidMount() {

        if (this.props.state == 2) {
            this.setState({ image: active });
        }
        if (this.props.state == 0) {
            this.setState({ image: stopped });
        }
        if (this.props.state == 1) {
            this.setState({ image: holded });
        }


    }
    componentWillUnmount() {

    }
    render() {


        return (
            <Draggable  grid={[7, 7]}>
                <Container >
                   
                    <Paper style={{  height: "fit-content" }} elevation={24} >
                        <Box mx={1} py={0.4}>
                        <Paper>
                            <Box px={0.5}py={0.4}>
                                <img style={mystyle.imagestyle} src={this.state.image} />
                            </Box>
                        </Paper>
                        <Box  style={mystyle.description}>
                            <Typography >Line Number :{this.props.line_number}</Typography>


                        </Box>
                        <Box my={1}>
                            <Paper elevation={2} style={{ backgroundColor: "#F2F2F2" }}>
                                <Box p={0.1}>
                                    <CustomizedTables V_type ={this.props.V_type} line_number={this.props.line_number} RT_RATIO={this.props.RT_RATIO} A_DURATION={this.props.A_DURATION} D_DURATION={this.props.D_DURATION} START_TIME={this.props.START_TIME}></CustomizedTables>
                                </Box>
                            </Paper>
                        </Box>
                        </Box>
                    </Paper>


                </Container >
            </Draggable>
        );
    }

}