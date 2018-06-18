import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';    
import List from '@material-ui/core/List';
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
                    <Lister/>
                    <Lister/>
                </List>
            </Paper>

        )
    }
}


export default withStyles(styles) (LeaderBoard);
