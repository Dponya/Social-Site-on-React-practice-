import React from 'react';
import { NavLink } from 'react-router-dom';

const DialogueAuthor = (props) => {
    const path = '/dialogs/' + props.id;
    return (
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogueAuthor;