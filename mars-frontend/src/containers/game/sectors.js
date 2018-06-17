import React , {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import SingleSector from "../../components/gameBoard/sector/singleSector";

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

class Sectors extends Component{
    render(){
        const { classes } = this.props;
        return(
            <Paper className={classes.paper}>
                <h3>Sectors</h3>
                <List>
                    <SingleSector/>
                    <SingleSector/>
                    <SingleSector/>
                    <SingleSector/>
                    <SingleSector/>
                </List>
            </Paper>
        )
    }
}

export default withStyles(styles) (Sectors);