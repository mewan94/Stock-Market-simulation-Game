import React, { Component } from 'react';
import './dialogBox.css';
import image1 from '../../assets/imgs/startup.png';
import { AButton } from '../common';

class DialogBox extends Component {
    render() {

        let title = "Start Game";
        let description = "play with your friends or against AI";

        return (
            <div className="container-center-align">
                <div className="dialog-box">
                    <div className="bg-wave"></div>
                    <div className="row adjest-height">
                        <div className="content">
                            <h1 className="main-title">{title}</h1>
                            <h6 className="secondary-title">{description}</h6>
				        </div>
                        <div className="content-center">
                                <img src={image1}/>
				        </div>
                    </div>
                    <div className="row">
                        <div className="content-center">
                            <AButton text="Create New Game" type={"b1"}/>
                            <br/>
                            <AButton text="Join To Existing" type={"b2"}/>
			            </div>
                        <div className="content-center bottom-align">
                            <AButton text="Home" type={"b3"}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DialogBox;