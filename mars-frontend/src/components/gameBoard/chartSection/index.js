import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Scrollbox from '../../common/scrollbox/index';
import Section from '../../common/section/index';
import TimelineCon from './timeLine';
import './chartSection.css';

class ChartSection extends Component {
    render() {
        return (
            <div className="chart-section">
                <Section>
                    {/* <TimelineCon/> */}
                </Section>
            </div>
        );
    }
}

export default ChartSection;