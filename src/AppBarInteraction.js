import React, { useState, Fragment } from 'react';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router-dom';
import ListSubheader from '@material-ui/core/ListSubheader';

import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import { sizing } from '@material-ui/system';
import Dht from './dht.js'
import Grid from '@material-ui/core/Grid'
import Time from './time.js';
import Logo from './logo.js';
import history from './history';
import NestedLists from './NestedLists.js';
import Checkbox from '@material-ui/core/Checkbox';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20

  },
  toolbarMargin: theme.mixins.toolbar,
  aboveDrawer: {
    zIndex: theme.zIndex.drawer + 1
  },
  listSubheader: {
    padding: 0,
    minWidth: 0,
    color: 'inherit',
    '&:hover': {
      background: 'inherit'
    }
  }
});

const MyToolbar = withStyles(styles)(
  ({ classes, title, onMenuClick }) => (
    <Fragment>
      <AppBar className={classes.aboveDrawer}>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={onMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            className={classes.flex}
          >
            {title}
          </Typography>




          <Grid container alignItems="stretch" spacing={1} >
            <Grid item xs={4}>
              <Box mt={3} mb={2}>
                <Grid container alignItems="stretch" spacing={1} >
                  <Grid item xs={2}>


                    <Box mt={2}>
                      <Typography align='center' variant="h5">LEONI </Typography>
                    </Box>

                  </Grid>
                  <Grid item xs={7}>

                    <Logo></Logo>

                  </Grid>

                </Grid>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box height={100} mt={3}>
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
      <div className={classes.toolbarMargin} />
    </Fragment>
  )
);

const MyDrawer = withStyles(styles)(





  ({ classes, variant, open, onClose, onItemClick }) => (



    <Drawer variant={variant} open={open} onClose={onClose}>
      <div
        className={clsx({
          [classes.toolbarMargin]: variant === 'persistent'
        })}
      />
      <List>

        <ListItem button onClick={onItemClick('MH1')}>
          <ListItemText>MH1</ListItemText>
        </ListItem>
        <ListItem button onClick={onItemClick('MH2')}>
          <ListItemText>MH2</ListItemText>
        </ListItem>

        <NestedLists name={"Vorderwagen"}></NestedLists>
        
      </List>
    </Drawer>
  )
);

function AppBarInteraction({ classes, variant }) {
  const [drawer, setDrawer] = useState(false);
  const [title, setTitle] = useState('');

  const toggleDrawer = () => {
    setDrawer(!drawer);
    
    if (drawer==true){
      window.location.reload();
    }
  };

  const onItemClick = title => () => {

    setTitle(title);
    history.push('/' + title);
    history.go(0);

    setDrawer(variant === 'temporary' ? false : drawer);

  };

  return (

    <div className={classes.root}>

      <MyToolbar title={title} onMenuClick={toggleDrawer} >
      </MyToolbar>

      <MyDrawer
        open={drawer}
        onClose={toggleDrawer}
        onItemClick={onItemClick}
        variant={variant}
      />


    </div>

  );
}

export default withStyles(styles)(AppBarInteraction);
