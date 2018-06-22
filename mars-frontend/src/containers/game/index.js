import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import Header from "./header";
import Header from '../../components/gameBoard/header/index';
// import Sectors from "./sectors";
import Sectors from '../../components/gameBoard/sectors/index';
import "./main.css";
import { Hidden } from '@material-ui/core';

const styles = theme => ({
    root: {
       flexgrow:1,
    },
    paper: {
        padding: theme.spacing.unit * 3,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

function FullWidthGrid(props) {
    const { classes } = props;

    return (
            <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={12} sm={12}>
                    <Header/>
                </Grid>
                <Grid item xs={12} sm={3}>
                    test
                </Grid>
                <Grid item xs={12} sm={6}>
                    test
                    {/* <Paper className={classes.paper}>xs=12 sm=6</Paper> */}
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Paper className={classes.paper}>xs=12 sm=6</Paper>
                </Grid>
                <Grid item xs={6} sm={9}>
                    <Paper className={classes.paper}>xs=6 sm=3</Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>xs=6 sm=3</Paper>
                </Grid>
            </Grid>
        </div>
    );
}

FullWidthGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);