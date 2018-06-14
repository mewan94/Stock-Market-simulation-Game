import React , {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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

class Header extends Component{
    render(){
        const { classes } = this.props;
        return(
            <Grid container>
                <Grid item xs={4} sm={4}>
                    <Paper className={classes.paper}><h3>Home/Transactions</h3></Paper>
                </Grid>
                <Grid item xs={4} sm={4}>
                    <Paper className={classes.paper}><h3>Turn 5 : 3.10 s</h3></Paper>
                </Grid>
                <Grid item xs={4} sm={4}>
                    <Paper className={classes.paper}><h3>RS.1000</h3></Paper>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles) (Header);