import React , {Component} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';

class SingleSector extends Component{
    render(){
        return(
            <ListItem>
                <Avatar>
                    <ImageIcon />
                </Avatar>
                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>
        )
    }
}

export default SingleSector;