import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './section.css';

class Section extends Component {
    render() {

        let color = this.props.color;

        return (
            <div className="section" style={{backgroundColor:color}}>
                {this.props.children}
            </div>
        );
    }
}

export default Section;