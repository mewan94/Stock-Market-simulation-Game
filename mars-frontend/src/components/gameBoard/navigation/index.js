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
import './navigation.css';

const styles = theme => ({

});

class Profile extends Component {

    render() {
        const { classes } = this.props;
        let amount=1000.51;

        return (
            <div className="nav-container">
                <span className="nav-text">Go to</span>
                <div className="nav-button-container">
                    <a href="#" className="active">Dashboard</a>
                    <a href="#">Bank</a>
                    <a href="#">Transaction</a>
                </div>
                <div className="nav-devider"/>
                <span className="nav-text">Leaderboard</span>
                <div className="leaderboard-container">
                    <History/>
                </div>
                
            </div>
        );
    }
}

export default withStyles(styles)(Profile);