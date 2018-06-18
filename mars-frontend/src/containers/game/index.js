import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from "./header";
import Sectors from "./sectors";
import LeaderBoard from "./leaderBoard";
import TablePaginationActions from "./companies";
import TimelineCon from './timeLine';
import Analyst from './analyst';

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

function FullWidthGrid(props) {
    const { classes } = props;

    return (
            <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={12} sm={12}>
                    <Header/>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Sectors/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TablePaginationActions/>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <LeaderBoard/>
                </Grid>
                <Grid item xs={6} sm={9}>
                    <TimelineCon/>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Analyst/>
                </Grid>
            </Grid>
        </div>
    );
}

FullWidthGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);