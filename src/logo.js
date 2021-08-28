import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { json } from 'body-parser';
import Cookies from 'js-cookie';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { array } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const styles = theme => ({

    spacing: 8



});
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default class Logo extends React.Component {

    constructor(props) {
        super(props);
        this.state = { logo: '' ,size:''};


    }
    async componentDidMount() {




        await axios.get('http://localhost:3333/apperance').then(resp => {


            this.setState({ logo: resp.data })
            this.setState({size:resp.data.length})

            console.log(this.state.size);
           
        });



    }
    componentWillUnmount() {

    }
    render() {
        let r=Object.values(this.state.logo);
      
     const c= r.map(element=>
        <img  style={{ height:"100%", width: (100/this.state.size)+'%', display:'inline' }} src={element.image}></img>
        );


        return (

           <Box  display='inline' width='100%' height={10}>
            <Paper style={{opacity:0.9}}elevation={15} >
                
                
                {c}
              
            </Paper>
            </Box>
           

        );
    }

}