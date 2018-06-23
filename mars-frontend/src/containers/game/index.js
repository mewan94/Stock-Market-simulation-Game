import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from '../../components/gameBoard/header/index';
import Profile from '../../components/gameBoard/profile/index';
import CompanySection from '../../components/gameBoard/companySection/index';
import ChartSection from '../../components/gameBoard/chartSection/index';
import Section from '../../components/common/section/index';
import TimelineCon from './home/timeLine';
// import LeaderBoard from "./leaderBoard";
// import TablePaginationActions from "./companies";
// import TimelineCon from './timeLine';
// import Analyst from './analyst';
import { Hidden } from '@material-ui/core';
import "./game.css";

const styles = theme => ({
    root: {
        width:'100%',
        maxWidth:'100%',
        minWidth:'100%',
        // height:'100vh',
        // maxHeight:'100vh',
        // minHeight:'100vh',
        margin:0,
        padding:0,
        boxSizing:'border-box',
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
            <Grid container>
                <Grid item xs={12} sm={12}>
                    <Header/>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Profile/>
                </Grid>
                <Grid item xs={12} sm={7}>
                    <CompanySection/>
                    <TimelineCon/>
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