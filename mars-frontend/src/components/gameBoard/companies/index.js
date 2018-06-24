import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Scrollbox from '../../common/scrollbox/index';
import Company from '../company/index';
import './companies.css';

class Companies extends Component {
    render() {
        return (
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
        );
    }
}

export default Companies;