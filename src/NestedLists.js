import React, { useState, Fragment } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import audi from './Logo-Audi-1.jpg'
import seat from './logo-seat.jpg'
import volks from './volks-logo.jpg'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';
import ContactsIcon from '@material-ui/icons/Contacts';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import { PinDropSharp } from '@material-ui/icons';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';
import motor from './motor.jpg'
import doors from './doors.jpg'
import innenraum from './innenraum.jpg';
import chassis from './cha.jpg'


const useStyles = makeStyles(theme => ({

}));

const ExpandIcon = ({ expanded }) =>
  expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />;

export default function NestedLists() {
  const classes = useStyles();

  const [items, setItems] = useState([
    {
      name: 'VorderWagen',
      image: motor,
      expanded: false,
      children: [
        { name: 'Audi', image: audi, checked:null  },
        { name: 'Seat', image: seat, checked: null},
        { name: 'Neo', image: volks, checked: false },
        { name: 'Assuve', image: volks, checked:false }
      ]
    },
    {
      name: 'FahrWerk',
      image: chassis,
      expanded: false,
      children: [
        { name: 'Audi', image: audi, checked: true },
        { name: 'Seat', image: seat, checked: true },
        { name: 'Neo', image: volks, checked: true },
        { name: 'Assuve', image: volks, checked: true }
      ]
    },
    {
      name: 'Doors',
      image: doors,
      expanded: false,
      children: [
        { name: 'Audi', image: audi, checked: true },
        { name: 'Seat', image: seat, checked: true },
        { name: 'Neo', image: volks, checked: true },
        { name: 'Assuve', image: volks, checked: true }
      ]
    },
    {
      name: 'InnenRaum',
      image: innenraum,
      expanded: false,
      children: [
        { name: 'Audi', image: audi, checked: true },
        { name: 'Seat', image: seat, checked: true },
        { name: 'Neo', image: volks, checked: true },
        { name: 'Assuve', image: volks, checked: true }
      ]
    }
  ]);


  const onClick = index => () => {

    const newItems = [...items];
    const item = items[index];

    newItems[index] = { ...item, expanded: !item.expanded };

    setItems(newItems);
  };
  const render_component = (state, line_name, index,segment) => () => {
    state =! state;

    if (state == false) {
      state = 0
    } else state = 1

    axios.get('http://localhost:3333/mh1/line_number/' + state + '/'+segment+'/RT_RATIO/START_TIM/' + line_name).then(resp => { });
    axios.get('http://localhost:3333/mh2/line_number/' + state + '/'+segment+'/RT_RATIO/START_TIM/' + line_name).then(resp => { });
    


    console.log(line_name)
    console.log(segment)
    console.log(state)
    console.log(index)
    
    
      
      

  };
 

  return (
    <List>
      {items.map(({ Icon, ...item }, index) => (
        <Fragment key={index}>
          <ListItem button onClick={onClick(index)}>
            <ListItemIcon>
              <Avatar src={item.image}></Avatar>
            </ListItemIcon>
            <ListItemText primary={item.name} />
            <ExpandIcon expanded={item.expanded} />
          </ListItem>
          <Collapse in={item.expanded}>
            {

              item.children.map((child, index) => (
                <ListItem
                  key={child.name}
                  className={classes.subItem}
                  button
                  dense
                >
                  <ListItemIcon>
                    <Avatar style={{ height: '29px', width: '29px' ,marginLeft : '15px'}} src={child.image}></Avatar>
                    <Checkbox
                      defaultChecked={false}
                     
                      onChange={render_component(false, child.name, index,item.name)}></Checkbox>
                  </ListItemIcon>
                  <ListItemText primary={child.name} />
                </ListItem>
              ))}
          </Collapse>
        </Fragment>
      ))}
    </List>
  );
}
