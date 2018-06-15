import React , {Component} from 'react';
import { Button } from '../../components/common';
import { Input } from '../../components/common';
import './step2.css';
import SinglePlayer from "../../components/welcome/singlePlayer";

class Step2 extends Component{
    render(){
        let title = "initiating...";
        let description = "Waiting for the host to start the game. \n Minimum 3 players are required to play";
        let { close } = this.props;

        return(
            <React.Fragment>
                <div className="row adjest-height">
                    <div className="content">
                        <div className="content-container">
                            <h1 className="dialog-main-title">{title}</h1>
                            <h2 className="dialog-secondary-title">{description}</h2>
                        </div>
                        <div className="content-container">
                            <Input type="text" text="Send the game URL to friends to join" submit={this.props.submit} default="www.link.com/12546"/>
                        </div>
                    </div>
                    <div className="content-center">
                        <ul className="playerList">
                            <SinglePlayer text="player 1" type="ai"/>
                            <SinglePlayer text="player 1" type="user"/>
                            <SinglePlayer text="player 1" type="ai"/>
                            <SinglePlayer text="player 1" type="ai"/>
                            <SinglePlayer text="player 1" type="user"/>
                            <SinglePlayer text="player 1" type="ai"/>
                            <SinglePlayer text="player 1" type="user"/>
                            <SinglePlayer text="player 1" type="ai"/>
                            <SinglePlayer text="player 1" type="ai"/>
                            <SinglePlayer text="player 1" type="user"/>
                            <SinglePlayer text="player 1" type="ai"/>
                            <SinglePlayer text="player 1" type="user"/>
                            <SinglePlayer text="player 1" type="ai"/>
                            <SinglePlayer text="player 1" type="ai"/>
                            <SinglePlayer text="player 1" type="user"/>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="content-center">
                        <Button text="Start" type={"b1"} isLink="true" />
                        <br/>
                        <Button text="Add AI Player" type={"b2"} isLink="true" />
                    </div>
                    <div className="content-center bottom-align">
                        <Button text="Home" type={"b3"} isLink="true" onclick={close}/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Step2;