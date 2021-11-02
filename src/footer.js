import React from "react";
import { Paper, Typography } from '@material-ui/core';
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  import RefreshPage from "./refreshpage";
const Footer = () => {
  return (
      <Paper elevation={24}>
    <Box style={{ position:"fixed" ,zIndex:10}}>
     

        <Row>
          <Column>
            <Heading>Refreshing in:</Heading>
           
          </Column>
          <Column>
            <Heading><RefreshPage></RefreshPage></Heading>
           
          </Column>
          <Column>
            <Heading></Heading>
           
          </Column>
          <Column>
            <Heading></Heading>
            
           
            
          </Column>
        </Row>
  
    </Box>
    </Paper>
  );
};
export default Footer;