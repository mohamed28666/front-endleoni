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
import { useEffect } from 'react';

const useStyles = makeStyles(theme => ({

}));

const ExpandIcon = ({ expanded }) =>
  expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />;

export default function NestedLists(props) {
  const classes = useStyles();
  let t;


  let [elements, setItems] = useState([
    {
      name: 'VorderWagen',
      image: motor,
      expanded: false,
      children: [
        { name: 'Audi', image: audi, checked: false },
        { name: 'Seat', image: seat, checked: false },
        { name: 'Neo', image: volks, checked: false},
        { name: 'Assuve', image: volks, checked: false}
      ]
    },
    {
      name: 'FahrWerk',
      image: chassis,
      expanded: false,
      children: [
        { name: 'Audi', image: audi, checked: false },
        { name: 'Seat', image: seat, checked: false },
        { name: 'Neo', image: volks, checked: false },
        { name: 'Assuve', image: volks, checked: false }
      ]
    },
    {
      name: 'Doors',
      image: doors,
      expanded: false,
      children: [
        { name: 'Audi', image: audi, checked: false },
        { name: 'Seat', image: seat, checked: false },
        { name: 'Neo', image: volks, checked: false },
        { name: 'Assuve', image: volks, checked: false }
      ]
    },
    {
      name: 'InnenRaum',
      image: innenraum,
      expanded: false,
      children: [
        { name: 'Audi', image: audi, checked: false },
        { name: 'Seat', image: seat, checked: false },
        { name: 'Neo', image: volks, checked: false },
        { name: 'Assuve', image: volks, checked: false }
      ]
    }
  ]);
  let IT;
 


  if (localStorage.getItem('checkbox') == null) {
    localStorage.setItem('checkbox', JSON.stringify(elements));
  }
  IT = localStorage.getItem('checkbox')
  IT = JSON.parse(IT);
  const onClick = index => () => {
     elements= localStorage.getItem('checkbox')
     elements= JSON.parse(elements);
    const newItems = [...elements];
    const item = elements[index];

    newItems[index] = { ...item, expanded: !item.expanded };
     localStorage.setItem('checkbox', JSON.stringify(newItems))
    setItems(newItems);

  };
  const render_component = (state, line_name, index, segment, etatcourante, index1) => () => {
    state = !state;
    let etatb
    if (state == false) {
      state = 0
      etatb = false
    } else { state = 1; etatb = true; }

    axios.get('http://localhost:3333/mh1/line_number/' + state + '/' + segment + '/RT_RATIO/START_TIM/' + line_name).then(resp => { });
    axios.get('http://localhost:3333/mh2/line_number/' + state + '/' + segment + '/RT_RATIO/START_TIM/' + line_name).then(resp => { });

    console.log(index1);
    let v = JSON.parse(localStorage.getItem('checkbox'))
    v[index1].children[index].checked = etatb



    localStorage.setItem('checkbox', JSON.stringify(v));

   // console.log(etatcourante)
    //console.log(line_name)
    //console.log(segment)
  //  console.log(state)
    //console.log(index)





  };
  let Vtypes = ['Audi', 'Seat', 'Neo', 'Assuve'];
  let segment = ['InnenRaum', 'Doors', 'FahrWerk', 'VorderWagen']
 
  useEffect(() => {

    if (localStorage.getItem('checkbox') == null) {
      localStorage.setItem('checkbox', JSON.stringify(elements));
    }
    else {
      IT = localStorage.getItem('checkbox')
      console.log(JSON.parse(IT))
    }



  });

  return (
    <List>
      {IT.map(({ Icon, ...item }, index1) => (
        <Fragment key={index1}>
          <ListItem button onClick={onClick(index1)}>
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
                    <Avatar style={{ height: '29px', width: '29px', marginLeft: '15px' }} src={child.image}></Avatar>
                    <Checkbox
                      defaultChecked={child.checked}

                      onChange={render_component(child.checked, child.name, index, item.name, props.value, index1)}></Checkbox>
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
