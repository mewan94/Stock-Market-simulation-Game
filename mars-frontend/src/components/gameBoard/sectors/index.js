import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Scrollbox from '../../common/scrollbox/index';
import Sector from '../sector/index';
import Company from '../company/index';
import './sectors.css';

class Sectors extends Component {
    render() {
        return (
            <div className="sec-container">
                <Scrollbox>
                    <Sector text="Education"/>
                    <Sector text="Computing"/>
                    <Sector text="Technical"/>
                    <Sector text="Automation"/>
                    <Sector text="Engineering"/>
                </Scrollbox>
            </div>
        );
    }
}

export default Sectors;