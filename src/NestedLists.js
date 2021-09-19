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

const useStyles = makeStyles(theme => ({
  
}));

const ExpandIcon = ({ expanded }) =>
  expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />;

export default function NestedLists() {
  const classes = useStyles();

  const [items, setItems] = useState([
    {
      name: 'VorderWagen',
      Icon: InboxIcon,
      expanded: false,
      children: [
        { name: 'Audi', image: audi , checked : true},
        { name: 'Seat', image: seat ,checked:true },
        { name: 'Neo',  image: volks ,checked:true },
        { name: 'Assuve', image: volks ,checked : true}
      ]
    },
    {
      name: 'FahrWerk',
      Icon: ContactsIcon,
      expanded: false,
      children: [
        { name: 'Audi', image: audi ,checked:true},
        { name: 'Seat', image: seat ,checked : true  },
        { name: 'Neo',  image: volks  ,checked : true},
        { name: 'Assuve', image: volks,checked :true }
      ]
    },
    {
      name: 'Doors',
      Icon: ContactsIcon,
      expanded: false,
      children: [
        { name: 'Audi', image: audi ,checked:true},
        { name: 'Seat', image: seat ,checked:true },
        { name: 'Neo',  image: volks ,checked:true },
        { name: 'Assuve', image: volks,checked:true }
      ]
    },
    {
      name: 'InnenRaum',
      Icon: ContactsIcon,
      expanded: false,
      children: [
        { name: 'Audi', image: audi,checked:false },
        { name: 'Seat', image: seat ,checked:true },
        { name: 'Neo',  image: volks ,checked:true },
        { name: 'Assuve', image: volks ,checked:true }
      ]
    }
  ]);

  const onClick = index => () => {

    const newItems = [...items];
    const item = items[index];

    newItems[index] = { ...item, expanded: !item.expanded };
  
    setItems(newItems);
  };
  const render_component =(state ,index) => () => {
   state=!state;
   
   console.log(items)
   console.log(index)
  
  };

  return (
    <List>
      {items.map(({ Icon, ...item }, index) => (
        <Fragment key={index}>
          <ListItem button onClick={onClick(index)}>
            <ListItemIcon>
              <Icon />
              </ListItemIcon>
            <ListItemText primary={item.name} />
            <ExpandIcon expanded={item.expanded} />
          </ListItem>
          <Collapse in={item.expanded}>
            {
           
            item.children.map((child,index) => (
              <ListItem
                key={child.name}
                className={classes.subItem}
                button
                dense
              >
                <ListItemIcon>
                <Avatar src={child.image}></Avatar>
                <Checkbox checked={child.checked}
                onChange={render_component(child.checked,index)}></Checkbox>
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