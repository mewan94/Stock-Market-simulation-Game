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
import './profile.css';

const styles = theme => ({

});

class Profile extends Component {

    render() {
        const { classes } = this.props;

        return (
            <div className="profile-section">
                <div className="prof-name-sec">
                    <h3>PlayerName</h3>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Profile);