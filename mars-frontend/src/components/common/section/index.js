import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './section.css';

class Section extends Component {
    render() {
        return (
            <div className="section">
                {this.props.children}
            </div>
        );
    }
}

export default Section;