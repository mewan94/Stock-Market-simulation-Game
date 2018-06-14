import React, { Component } from 'react';
import { Button } from '../../components/common';
import image1 from '../../assets/imgs/backgroundimg.png';
import image2 from '../../assets/imgs/bgart.png';
import DialogBox from "../../components/dialogBox/index";
import Step1 from "./step1";
import { Dialog } from '@material-ui/core';

class Welcome extends Component {

    constructor(props){
        super(props);
        this.state={
            isPopupOpen:false
        }
    }

    _openPopup = () => {
        this.setState({
            isPopupOpen:true
        })
    };

    _closePopUp = () => {
        this.setState({
            isPopupOpen:false
        })
    };

    render() {
        return (
            <div className="background">
                {/* {this.state.isPopupOpen && <DialogBox>
                    <Step1 close={this._closePopUp.bind(this)}/>
                </DialogBox>} */}
                <div className="svg-container">
                    {/*// svg path with image (which creates the wave effect in background)*/}
                    <svg viewBox="0 0 1920 786.027">
                        <defs>
                            {/*// image included inside the wave path*/}
                            <pattern id="img1"  patternUnits="userSpaceOnUse" width="2064" height="894">
                                <image xlinkHref={image1} x="0" y="0" width="2064" height="894" />
                            </pattern>
                        </defs>
                        {/*// embeded wave type svg path*/}
                        <path id="wave" className="wave" d="M563.158,549.138c-215.075,0-387.953,91.044-482.977,155.109V64.759h1920v610.86c-67.347,31.752-187.16,72.36-359.485,72.36C1231.506,747.978,907.8,549.138,563.158,549.138Z" transform="translate(-80.181 -64.759)"/>
                    </svg>
                    {/*// /.svg path*/}

                    {/*// center button and name*/}
                    <div className="center container-home-vertical">
                        <div className="container-home">
                            <h1 className="game-name">Stock Mania</h1>
                            <h6 className="slogan">Be the stock market hero!</h6>
                        </div>
                        <div className="button-container">
                            {/* <Button text="Start Game" onclick={this._openPopup.bind(this)}/> */}
                            {/* changed by Sanira to make dialog box pop-up */}
                            <Button text={"Start Game"} type={"b1"} isLink={"true"} href={"#dialog"}/>
                        </div>

                    </div>
                </div>
                <div className="container-home-horizontal margin-reduced">
                    <div className="content-half-width">
                        <img src={image2} className="art" alt=""/>
                    </div>
                    <div className="content-half-width justify-left">
                        <Button text="About Game" type={1}/>
                        <Button text="How to play" type={2}/>
                    </div>
                </div>

                {/* make pop up dialog */}
                <div>
                    <DialogBox id={"dialog"}>
                        <Step1 close={this._closePopUp.bind(this)}/>
                    </DialogBox>
                </div>
            </div>
        )
    }
}

export default Welcome;