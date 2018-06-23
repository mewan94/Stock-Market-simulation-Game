import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Scrollbox from '../../common/scrollbox/index';
import Sectors from '../sectors/index';
import Companies from '../companies/index';
import Section from '../../common/section/index';
import './companySection.css';

class CompanySection extends Component {
    render() {
        return (
            <div className="comp-section">
                <Section>
                    <div className="sec-list">
                        <Sectors/>
                    </div>
                    <div className="com-list">
                        <Companies/>
                    </div>
                </Section>
            </div>
        );
    }
}

export default CompanySection;