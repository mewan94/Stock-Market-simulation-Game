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
        let amount=1000.51;

        return (
            <div className="sector-container">
                <div className="profile-section">
                    <div className="prof-img-sec">
                        <Avatar>
                            <ImageIcon/>
                        </Avatar>
                    </div>
                    <div className="prof-name-sec">
                        <h3>PlayerName</h3>
                        <h4>LKR. {amount}</h4>
                    </div>
                </div>
                <div className="sectors-section">
                    <h3>Sectors</h3>
                    <div className="sector-list">
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <InboxIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Education"/>
                            </ListItem>
                        </List>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Profile);