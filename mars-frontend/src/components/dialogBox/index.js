import React, { Component } from 'react';
import './dialogBox.css';

class DialogBox extends Component {
    render() {
        return (
            <div className="container-center-align overlay" id={this.props.id}>
                <div className="dialog-box">
                    <div className="bg-wave"/>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default DialogBox;