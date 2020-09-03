import React from 'react';
import {Link} from 'react-router-dom';
import 'styles/_navBtn.scss';


export const NavButton = props => {
    return(
        <Link to={props.link}><button type="button">{props.name}</button></Link>
    );
}