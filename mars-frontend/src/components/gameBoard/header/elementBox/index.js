import React, { Component } from 'react';
import './elementbox.css';

class Elementbox extends Component {
    render() {

        let color = this.props.color;

        return (
            <div className="header-elementbox">
                <div className="header-element-icon">
                    <div className="header-icon" style={{backgroundColor:color}}>
                        <span className="icon-img">{this.props.icon}</span>
                    </div>
                </div>
                <div className="header-element-text">
                    <span className="element-text-main" style={{color:color}}>
                        {this.props.maintext}
                    </span>
                    <span className="element-text-secondary">{this.props.desc}</span>
                </div>
            </div>
        );
    }
}

export default Elementbox;