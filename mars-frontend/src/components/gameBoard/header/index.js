import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import './header.css';

class Header extends Component {
    render() {

        let turn = 8;
        let time = 134;

        return (
            <div className="container">
                <div className="contentbox-1">
                    <h1 className="main-title">Stock Mania</h1>
                </div>
                <div className="contentbox-2">
                    <span className="turn-time">Turn : {turn}</span>
                    <div className="line"></div>
                    <span className="turn-time">Time Left : {time}s</span>
                </div>
                <div className="contentbox-3">
                </div>
            </div>
        );
    }
}

export default Header;