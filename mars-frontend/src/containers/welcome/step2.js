import React , {Component} from 'react';
import { Button } from '../../components/common';
import { Input } from '../../components/common';
import './step2.css';
import SinglePlayer from "../../components/welcome/singlePlayer";

class Step2 extends Component{

    constructor(props){
        super(props);
        this.state={
            isDialogOpen:false
        }
    }

    _getStep = () => {
        if(this.props.getStep){
            this.props.getStep(1);
        }
    };

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
                            {this.props.gameid}
                        </div>
                    </div>
                    <div className="content-center">
                        <ul className="playerList">
                            {this.props.gameList && this.props.gameList.map((item,i) => {
                                return <SinglePlayer text={item} key={i} type="ai"/>
                            })}
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="content-center">
                        {this.props.gameList && this.props.gameList.length > 2 && <Button text="Start" type={"b1"} isLink="true" onclick={this._getStep.bind(this)}/>}
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