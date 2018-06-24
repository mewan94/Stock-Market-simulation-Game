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
import Div from './div';
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
        height:'100vh',
        maxHeight:'100vh',
        minHeight:'100vh',
        margin:0,
        padding:0,
        boxSizing:'border-box',
        flexgrow:1,
    },
    gridMiddle:{
        height:50+'%'
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
                {/* header container */}
                <Grid container>
                    <Grid item xs={12} sm={12}>
                        <Header/>
                    </Grid>
                </Grid>
                
                {/* elements container */}
                <Grid container>
                    {/* profile section */}
                    <Grid item xs={12} sm={2}>
                        <Profile/>
                    </Grid>

                    {/* element section */}
                    <Grid item xs={12} sm={10}>
                        <Grid container>
                            {/* company section */}
                            <Grid item xs={12} sm={7}>
                                <CompanySection/>
                            </Grid>

                            {/* chart section */}
                            <Grid item xs={12} sm={5}>
                                <TimelineCon/>
                            </Grid>
                        </Grid>

                        <Grid container>
                            {/* under section 1 */}
                            <Grid item xs={12} sm={7}>
                                <Div/>
                            </Grid>

                            {/* under section 2 */}
                            <Grid item xs={12} sm={5}>
                                <Div/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>   
            </Grid>
        </div>
    );
}

FullWidthGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);