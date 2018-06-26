import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from '../../components/gameBoard/header';
import Navigation from '../../components/gameBoard/navigation';
import CompanySection from '../../components/gameBoard/companySection';
import FlexibleCharts from './home/newTimeLine';
import Div from './div';
import "./game.css";
import {connect} from 'react-redux';
import {getGame} from '../../actions/user';
import userTypes from '../../types/user';
import actionTypes from '../../types/gameAction';
import MyAccount from "./account/index";
import History from './transactions/transactions';

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
            bankBalance:this.props.balance,
            stocks:this.props.user.game.stocks,
            turn:this.props.user.game.turn+1,
            timeLeft:60,
            playerName:this.props.user.user.name,
            playerList:this.props.user.game.playerList,
            account:this.props.account,
            history:this.props.history,
            myAccount:this.props.myAccount,
            stac:this.props.stac,
            currentmap:this._setData([])
        }
    }
    componentDidMount(){
        this.props.dispatch(getGame(this.props.user.game.gameID));
        setInterval(()=> {
            this.setState({
                timeLeft:this.state.timeLeft === 0 ? this.state.timeLeft : this.state.timeLeft-1
            })
        },1000)
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.user.action === userTypes.GET_GAME_DETAILS_SUCCESS){
            this.setState({
                playerList:nextProps.user.game.playerList
            })
        }
        if(nextProps.user.action === actionTypes.START_TURN){
            this.setState({
                turn:nextProps.user.game.turn,
                stocks:nextProps.user.game.stocks,
                timeLeft:60
            })
        }
        if(nextProps.account !== this.state.account){
            this.setState({
                account:nextProps.account,
            })
        }
        if(nextProps.balance !== this.state.bankBalance){
            this.setState({
                bankBalance:nextProps.balance
            })
        }
        if(nextProps.history !== this.state.history){
            this.setState({
                history:nextProps.history
            });
            console.log(nextProps.history)
        }
        if(nextProps.myAccount !== this.state.myAccount){
            this.setState({
                myAccount:nextProps.myAccount
            })
        }
        if(nextProps.stac !== this.state.stac){
            this.setState({
                stac:nextProps.stac
            })
        }
    }

    _onHover = (symol) => {
        this.state.stac.forEach((item,i) =>{
            if(item.symol === symol){
                this.setState({
                    currentmap:this._setData(item.price)
                })
            }
        })
    };

    _setData = (data) => {
        let preset =[
            {x: 0, y: 0},
            {x: 1, y: 0},
            {x: 2, y: 0},
            {x: 3, y: 0},
            {x: 4, y: 0},
            {x: 5, y: 0},
            {x: 6, y: 0},
            {x: 7, y: 0},
            {x: 8, y: 0}
        ];

        data.forEach((item,i) => {
            preset[i].y = item
        });

        return preset;
    };

    render(){
        const { classes } = this.props;
        return (
            <div className={classes.root}>

                <Grid container>
                    {/* header container */}
                    <Grid container>
                        <Grid item xs={12} sm={12}>
                            <Header balance={this.state.bankBalance} turn={this.state.turn} timeLeft={this.state.timeLeft} playerName={this.state.playerName}/>
                        </Grid>
                    </Grid>

                    {/* elements container */}
                    <Grid container className={classes.changeTheme}>
                        {/* profile section */}
                        <Grid item xs={12} sm={2} className={classes.adjestHeight}>
                            <Navigation playerList={this.state.playerList}/>
                        </Grid>

                        {/* element section */}
                        <Grid item xs={12} sm={10}>
                            <Grid container>
                                {/* company section */}
                                <Grid item xs={12} sm={7}>
                                    <CompanySection stocks={this.state.stocks} onHover={this._onHover.bind(this)}/>
                                </Grid>

                                {/* chart section */}
                                <Grid item xs={12} sm={5}>
                                    <FlexibleCharts data={this.state.currentmap}/>
                                </Grid>
                            </Grid>

                            <Grid container>
                                {/* under section 1 */}
                                <Grid item xs={12} sm={7}>
                                    <History data={this.state.history}/>
                                </Grid>

                                {/* under section 2 */}
                                <Grid item xs={12} sm={5}>
                                    <MyAccount data={this.state.myAccount}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

FullWidthGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(
    state => {
        return {
            user: state.user,
            account: state.actions.myAccount,
            balance: state.actions.myBalance,
            history: state.actions.history,
            myAccount: state.actions.myAccount,
            stac: state.user.stac
        }
    }

)(withStyles(styles)(FullWidthGrid));