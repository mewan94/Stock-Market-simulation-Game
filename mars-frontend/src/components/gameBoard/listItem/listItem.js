import React , {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

class Lister extends Component{
    
    render(){
        return(
                    <ListItem>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                    </ListItem>

         ) }

}
export default Lister;