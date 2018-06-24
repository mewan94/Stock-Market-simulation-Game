import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Scrollbox from '../../common/scrollbox/index';
import Sectors from '../sectors/index';
import Companies from '../companies/index';
import Section from '../../common/section/index';
import Dialogbox from '../../dialogBox';
import './companySection.css';
import Div from '../../../containers/game/div';

class CompanySection extends Component {
    render() {

        return (
            <div>
                <div className="comp-section">
                    <Section color="#222">
                        <div className="sec-list">
                            <Sectors/>
                        </div>
                        <div className="com-list">
                            <Companies/>
                        </div>
                    </Section>
                </div>

                {/* popup model */}
                {/* <div>
                    <Dialogbox id="popup">

                    </Dialogbox>
                </div> */}
            </div>
        );
    }
}

export default CompanySection;