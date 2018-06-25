import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from '../../../components/gameBoard/header';
import Navigation from '../../../components/gameBoard/navigation';
import CompanySection from '../../../components/gameBoard/companySection';
import ChartSection from '../../../components/gameBoard/chartSection';
import Section from '../../../components/common/section';
import TimelineCon from '../home/timeLine';
import FlexibleCharts from '../home/newTimeLine';
import { Hidden } from '@material-ui/core';
import MyAccount from "./myAccount";

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
        backgroundColor:'#111',
        flexgrow:1,
    },
    changeTheme:{
        backgroundColor:'#444',
    },
    gridMiddle:{
        height:50+'%'
    },
    adjestHeight:{
        height:'35vh',
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
            account:{
                cash:0,
                stocks:[
                    {
                        companyID:1,
                        numOfStocks:50,
                        stockPrice:45
                    }
                ]
            }

        }
    }

    render(){
        const { classes } = this.props;
        
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
                    <Grid container className={classes.changeTheme}>
                        {/* profile section */}
                        <Grid item xs={12} sm={2} className={classes.adjestHeight}>
                            <Navigation/>
                        </Grid>
    
                        {/* element section */}
                        <Grid item xs={12} sm={10}>
                            <Grid container>
                                <Grid item xs={12} sm={12}>
                                    <MyAccount/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>   
            </div>
        );
    }
}

export default withStyles(styles)(FullWidthGrid);