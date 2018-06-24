import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import Header from "../header";
import Header from '../../../components/gameBoard/header/index';
import MyAccount from "./myAccount";

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
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={12}>
                        <Header/>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <MyAccount/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(FullWidthGrid);