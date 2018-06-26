import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Scrollbox from '../../common/scrollbox/index';
import Company from '../company/index';
import './companies.css';
import DialogBox from "../../dialogBox/index";
import {Input, Button} from "../../common/";
import {connect} from "react-redux";
import {buyStocks, sellStocks} from '../../../actions/gameActions';
import actionTypes from '../../../types/gameAction';

class Companies extends Component {

    initState = {
        isOpen:false,
        company:null,
        num:0,
        type:null,
        maxAmount:null,
    };

    constructor(props){
        super(props);
        this.state=({
            ...this.initState,
            account:this.props.action.myAccount,
            balance:this.props.action.myBalance
        })
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.action.action === actionTypes.BUY_STOCK_SUCCESS || actionTypes.SELL_STOCK_SUCCESS){
            this.setState({
                account:nextProps.action.myAccount,
                balance:nextProps.action.myBalance
            })
        }
    }

    _openPopup = (company,type) => {
        let maxAmount = null;
        if(type === 'sell'){
            this.state.account.forEach((item,i) =>{
                if(company.name === item.stock){
                    maxAmount = item.amount
                }
            });
        }else{
            maxAmount = this.state.balance / company.price
        }

        this.setState({
            isOpen:true,
            company:company,
            type:type,
            maxAmount:Math.floor(maxAmount)
        })
    };

    _closePopup = () => {
        this.setState({
            isOpen: false,
            company:null
        })
    };

    _getStocks = (num) => {
        this.setState({
            num:num
        })
    };

    _buyStocks = () => {
        this.props.dispatch(buyStocks(this.props.user.game.gameID,this.state.company.name,this.state.num));
        this.setState({...this.initState})
    };

    _sellStocks = () => {
        this.props.dispatch(sellStocks(this.props.user.game.gameID,this.state.company.name,this.state.num));
        this.setState({...this.initState})
    };

    render() {
        return (
            <div className="company-list">
                {this.state.isOpen &&
                <DialogBox>
                    <React.Fragment>
                    <div className="row adjest-height">
                        <div className="content">
                            <div className="content-container">
                                <h1 className="dialog-main-title">{'Buy stocks'}</h1>
                                <h2 className="dialog-secondary-title">{'description'}</h2>
                            </div>
                            <div className="content-container">
                                <Input type="number" text="Enter # of stocks" submit={this._getStocks.bind(this)}/>
                            </div>
                            <div className="content-container">
                                {this.state.type === 'sell' ? `you have ${this.state.maxAmount} to sell`:`you can buy maximum ${this.state.maxAmount} stocks`}
                            </div>
                        </div>
                        <div className="content-center">

                        </div>
                    </div>
                    <div className="row">
                        <div className="content-center">
                            {this.state.type === 'buy' && this.state.maxAmount >= this.state.num && <Button text="Buy stocks" type={"b1"} isLink="true" onclick={this._buyStocks.bind(this)}/>}
                            <br/>
                            {this.state.type === 'sell' && this.state.maxAmount >= this.state.num && <Button text="Sell Stocks" type={"b2"} isLink="true" onclick={this._sellStocks.bind(this)}/>}
                        </div>
                        <div className="content-center bottom-align">
                            <Button text="Cancel" type={"b3"} isLink="true" onclick={this._closePopup.bind(this)}/>
                        </div>
                    </div>
                    </React.Fragment>
                </DialogBox>}
                <Scrollbox>
                    {this.props.stocks.map((item,i) => {
                        return <Company companyName={item.name} unitPrice={item.price} company={item} open={this._openPopup.bind(this)} close={this._closePopup.bind(this)} key={i}/>
                    })}
                </Scrollbox>
            </div>
        );
    }
}

export default connect(
    state => {
        return {
            user: state.user,
            action: state.actions
        }
    }
) (Companies);