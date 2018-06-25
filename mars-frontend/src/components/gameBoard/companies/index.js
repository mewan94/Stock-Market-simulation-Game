import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Scrollbox from '../../common/scrollbox/index';
import Company from '../company/index';
import './companies.css';
import DialogBox from "../../dialogBox/index";
import {Input, Button} from "../../common/"

class Companies extends Component {

    constructor(props){
        super(props);
        this.state=({
            isOpen:true,
            company:null,
            num:0
        })
    }

    _openPopup = (company) => {
        this.setState({
            isOpen:true,
            company:company
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
                        </div>
                        <div className="content-center">

                        </div>
                    </div>
                    <div className="row">
                        <div className="content-center">
                            <Button text="Buy stocks" type={"b1"} isLink="true" />
                            <br/>
                            <Button text="Sell Stocks" type={"b2"} isLink="true" />
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

export default Companies;