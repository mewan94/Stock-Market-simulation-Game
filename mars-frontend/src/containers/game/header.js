import React , {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import BankIcon from '@material-ui/icons/AccountBalance';
import CartIcon from '@material-ui/icons/AddShoppingCart';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing.unit * 3,
    },
    button: {
        marginLeft: theme.spacing.unit * 1
    }
});

class Header extends Component{
    render(){
        const { classes } = this.props;
        return(
            <Grid container>
                <Grid item xs={12} sm={12}>
                    <Paper className={classes.paper}>
                        <Grid container>
                            <Grid item sm={4}>
                                <Link to="/play">
                                    <Button variant="fab" color="primary" aria-label="Game Board" className={classes.button}>
                                        <HomeIcon />
                                    </Button>
                                </Link>
                                <Link to="/account">
                                    <Button variant="fab" color="secondary" aria-label="My Account" className={classes.button}>
                                        <BankIcon />
                                    </Button>
                                </Link>
                                <Link to="/transactions">
                                    <Button variant="fab" color="default" aria-label="My Transactions" className={classes.button}>
                                        <CartIcon />
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid item sm={4}>
                                <Typography variant="headline" component="h2">Round: 1</Typography>
                                <Typography color="textSecondary"> Time left: 1 min 12 s</Typography>
                            </Grid>
                            <Grid item sm={4}>
                                <Typography variant="headline" component="h2">Current Balance : RS. 10000</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles) (Header);