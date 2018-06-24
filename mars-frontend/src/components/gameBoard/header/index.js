import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Elementbox from './elementBox';
import Profile from './profile'; 
import './header.css';

class Header extends Component {
    render() {

        return (
            <div className="header-container">
                <div className="contentbox-1">
                    <div className="profile-element">
                        <h1 className="main-title">Stock Mania</h1>
                    </div>
                    <div className="profile-element">
                        <Profile/>
                    </div>
                </div>
                <div className="contentbox-2">
                    <div className="header-element">
                        <Elementbox icon="$" maintext="2000" desc="Current Balance"/>
                    </div>
                    <div className="header-element">
                        <Elementbox icon="+" maintext="2 / 10" desc="Current Turn" color="orange"/>
                    </div>
                    <div className="header-element">
                        <Elementbox icon="@" maintext="38s" desc="Time Left" color="tomato"/>
                    </div>
                </div>
                <div className="contentbox-3">
                    <div>
                        <div>
                            <span className="analyst-title">Analyst's Tip</span>
                        </div>
                        <div>
                            <span className="analyst-desc">There can be a boom in computing sector</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;