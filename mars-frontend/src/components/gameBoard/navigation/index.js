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
import { Timeline } from 'antd';


const styles = theme => ({
    Timeline :{
        padding : theme.spacing.unit * 4,
        color: '#fff',
    },
    Item :{
        fontSize:'10pt',
    }
});

class Navigation extends Component {

    render() {
        const { classes, playerList } = this.props;

        return (
            <div className="nav-container">
                <span className="nav-text">Players</span>
                <div className="leaderboard-container">
                    <Timeline className={classes.Timeline}>
                        {playerList && playerList.map((item,i) => {
                            return <Timeline.Item className={classes.Item} key={i}>{item.dname}</Timeline.Item>
                        })}
                    </Timeline>
                </div>
                
            </div>
        );
    }
}

export default withStyles(styles)(Navigation);