import React from 'react';
import './singlePlayer.css';
import 'font-awesome/css/font-awesome.min.css';

export const SinglePlayer = (props) => {
    return(
        <li className="singlePlayer">
            <div>
                <i className={`fa ${props.type === 'ai' ? 'fa-desktop' : 'fa-user'}`}>  {props.text}</i>
            </div>
        </li>
    )
};

export default SinglePlayer