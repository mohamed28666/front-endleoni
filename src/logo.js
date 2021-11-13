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
import Container from '@material-ui/core/Container';
let g = ""
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
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
}));


export default class Logo extends React.Component {

    constructor(props) {
        super(props);
        this.state = { logo: '', size: '' };


    }
    async componentDidMount() {




        await axios.get('http://desktop-2klr075:3333/apperance').then(resp => {


            this.setState({ logo: resp.data })
            this.setState({ size: resp.data.length })



        });



    }
    componentWillUnmount() {

    }
    render() {
        let r = Object.values(this.state.logo);

        const c = r.map(element =>
            <Avatar  style={{  display: 'inline-block' ,marginTop:'5px'}} src={element.image} className={useStyles.large}></Avatar>
        );


        return (


     
                <Paper style={{ opacity: 0.9, width: 'fit-content', height: '50px' }} elevation={15} >
                    
                        <Box width={"100%"} height={"100%"}>

                            {c}
                        </Box>
                 

                </Paper>
      



        );
    }

}