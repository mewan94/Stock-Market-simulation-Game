import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/Inbox';
import History from './transactions';
import {Link} from 'react-router-dom';
import './navigation.css';

const styles = theme => ({

});

class Navigation extends Component {

    render() {
        const { classes } = this.props;

        return (
            <div className="nav-container">
                <span class="nav-text">Go to</span>
                <div className="nav-button-container">
                    {/* <a href="#" className="active">Dashboard</a> */}
                    <Link to="./play" className="active">Dashboard</Link>
                    <Link to="./account">Bank</Link>
                    <Link to="./transactions">Transactions</Link>
                </div>
                <div className="nav-devider"></div>
                <span class="nav-text">Leaderboard</span>
                <div className="leaderboard-container">
                    <History/>
                </div>
                
            </div>
        );
    }
}

export default withStyles(styles)(Navigation);