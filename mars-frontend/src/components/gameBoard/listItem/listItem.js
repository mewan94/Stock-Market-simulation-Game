import React , {Component} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';

class Lister extends Component{
    
    render(){
        return(
            <ListItem>
                <Avatar>
                    <WorkIcon />
                </Avatar>
                <ListItemText primary="Mathiw haris" secondary="Invested in telecommunication & 4 more sectors" />
                <ListItemText primary="Bank Balance" secondary="RS. 1000.00" />
                <ListItemText primary="Current Stocks" secondary="RS. 45000.00" />
            </ListItem>

         ) }

}
export default Lister;