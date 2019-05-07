import React from 'react';

import classes from './DrawerToggle.css';

const drawerToggle = (props) => (
    <div className={classes.Menu} onClick={props.clicked}>
        <p>MENU</p>
    </div>
);

export default drawerToggle;