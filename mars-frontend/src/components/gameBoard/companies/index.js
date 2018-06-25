import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Scrollbox from '../../common/scrollbox/index';
import Company from '../company/index';
import './companies.css';

class Companies extends Component {
    render() {
        console.log(this.props.stocks);
        return (
            <div className="company-list">
                <Scrollbox>
                    {this.props.stocks.map((item,i) => {
                        return <Company companyName={item.name} unitPrice={item.price} key={i}/>

                    })}
                </Scrollbox>
            </div>
        );
    }
}

export default Companies;