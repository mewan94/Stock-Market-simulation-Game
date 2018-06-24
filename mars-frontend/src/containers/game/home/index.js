import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import Header from "../header";
// import Sectors from "./sectors";
import Header from '../../../components/gameBoard/header/index';
import Profile from '../../../components/gameBoard/profile/index';
import CompanySection from '../../../components/gameBoard/companySection/index';
import ChartSection from '../../../components/gameBoard/chartSection/index';
import Section from '../../../components/common/section/index';
import LeaderBoard from "./leaderBoard";
import TablePaginationActions from "./companies";
import TimelineCon from './timeLine';
import Analyst from './analyst';
import { Hidden } from '@material-ui/core';

const styles = theme => ({
    root: {
        height:'100vh',
        maxHeight:'100vh',
        width:'100%',
        maxWidth:'100%',
        minWidth:'100%',
        margin:0,
        padding:0,
        backgroundColor:'red',
        // overflow:'hidden',
    },
    adjestment: {
        margin:0,
        padding:0,
        height:'100vh',
    },
    paper: {
        padding: theme.spacing.unit * 3,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class FullWidthGrid extends React.Component {

    constructor(props){
        super(props);
        this.state={
            sector:null,
            company:null,
            leaderBoard:[],
            hints:[],
            history:[],
            account:[]
        }
    }

    render(){
        const { classes } = this.props;
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
                        {/* <TimelineCon/> */}
                        <CompanySection/>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Analyst/>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        footer
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(FullWidthGrid);