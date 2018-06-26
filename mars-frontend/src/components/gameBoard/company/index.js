import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import './company.css';

class Company extends Component {
    render() {
        let companyName = this.props.companyName;
        let unitPrice = this.props.unitPrice;

        return (
            <div className="company newcompany" onMouseOver={this.props.onHover.bind(this,this.props.company.symbol)}>
                <div className="item-holder-1">
                    <h4>{companyName}</h4>
                </div>
                <div className="item-holder-2">
                    <h5>LKR. {unitPrice}</h5>       
                </div>
                <div className="item-holder-3">
                    <h6>Up</h6>
                </div>
                <div className="button-holder">
                    <a onClick={this.props.open.bind(this,this.props.company,'buy')}>Buy</a>
                </div>
                <div className="button-holder">
                    <a onClick={this.props.open.bind(this,this.props.company,'sell')}>Sell</a>
                </div>
            </div>
        );
    }
}

export default Company;