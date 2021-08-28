import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';

import Dht from './dht.js'
import Grid from '@material-ui/core/Grid'
import Time from './time.js';
import Logo from './logo.js';
const styles = theme => ({

  spacing: 8



});

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  const styles = theme => ({

    spacing: 8



  });
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Grid container alignItems="stretch" spacing={1} >
              <Grid item xs={4}>
                <Box display="block" mt={3} mb={2}>
                  <Grid container alignItems="stretch" spacing={1} >
                    <Grid item xs={2}>


                      <Box mt={2}>
                        <Typography align='center' variant="h5">LEONI </Typography>
                      </Box>

                    </Grid>
                    <Grid item xs={7}>
                      <Box display='inline' >
                        <Logo></Logo>
                      </Box>
                    </Grid>

                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box mt={3}>
                  <Time></Time>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box mt={5}>
                  <Typography align='center' variant="h5">MEB-TN IT DEPARTEMENT</Typography>
                </Box>
              </Grid>
            </Grid>


          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container>
        <Box >

        </Box>
      </Container>
    </React.Fragment>
  );
}