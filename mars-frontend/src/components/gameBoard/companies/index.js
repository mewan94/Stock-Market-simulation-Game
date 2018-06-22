import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Scrollbox from '../../common/scrollbox/index';
import Sector from '../sector/index';
import Company from '../company/index';
import './companies.css';

class Companies extends Component {
    render() {
        return (
            <div className="comp-container">
                <div className="comp-section">
                    <div className="sec-container">
                        <Sector text="Education"/>
                        <Sector text="Computing"/>
                        <Sector text="Technical"/>
                        <Sector text="Automation"/>
                        <Sector text="Engineering"/>
                    </div>
                    <div className="company-list">
                        <Scrollbox>
                            <Company companyName="Tesla" unitPrice="13.00"/>
                            <Company companyName="Ferarri" unitPrice="15.00"/>
                            <Company companyName="Toyota" unitPrice="08.00"/>
                            <Company companyName="Suzuki" unitPrice="05.00"/>
                            <Company companyName="Honda" unitPrice="08.00"/>
                            <Company companyName="Ducati" unitPrice="11.00"/>
                            <Company companyName="Lamborgini" unitPrice="15.00"/>
                            <Company companyName="Tesla" unitPrice="13.00"/>
                            {/* copied */}
                            <Company companyName="Ferarri" unitPrice="15.00"/>
                            <Company companyName="Toyota" unitPrice="08.00"/>
                            <Company companyName="Suzuki" unitPrice="05.00"/>
                            <Company companyName="Honda" unitPrice="08.00"/>
                            <Company companyName="Ducati" unitPrice="11.00"/>
                            <Company companyName="Lamborgini" unitPrice="15.00"/>
                        </Scrollbox>
                    </div>
                </div>
            </div>
        );
    }
}

export default Companies;