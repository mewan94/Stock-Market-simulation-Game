
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';    
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import React , {Component} from 'react';
import Lister from '../../components/gameBoard/listItem/listItem';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing.unit * 3,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class LeaderBoard extends Component{
    
    render(){
        const { classes } = this.props;
        return(
          <Paper className={classes.paper}>
                <h3>LeaderBoard</h3>
                <List>
                    <Lister/>
                </List>
            </Paper>
             
        )
    }
}

export default withStyles(LeaderBoard);