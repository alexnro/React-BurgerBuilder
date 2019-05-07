import React from 'react';

import classes from './Menu.css';

const menu = (props) => (
    <div className={classes.Menu} onClick={props.clicked}>
        <p>MENU</p>
    </div>
);

export default menu;