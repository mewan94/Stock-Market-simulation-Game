import React, { Component } from 'react';
import './theme.css';
import { Step1, Step2, Step3} from "../../components/welcome/";
import { GAME_TYPES, MULTIPLAYER_JOIN_TYPES} from "../../types/common";

class Welcome extends Component {

    constructor(props){
        super(props);
        this.state=({
            gameType:0,
            multiplayerJoinMethod:0
        })
    }

    _selectGameType = (type) => {
        this.setState({
            gameType:type
        });
    };

    _MultiplayerOption = (joinMethod) => {
        this.setState({
            multiplayerJoinMethod:joinMethod
        })
    };

    _CreateMultiplayerGame = (option) => {
        if(option){
            alert(`create game for ${option}`)
        }else{
            this.setState({
                multiplayerJoinMethod:0
            })
        }
    };

    render() {
        return (
            <div>
                {this.state.gameType === 0 && <Step1 select={this._selectGameType.bind(this)}/>}
                {this.state.gameType === GAME_TYPES.MUILTIPLAYER && this.state.multiplayerJoinMethod === 0 && <Step2 select={this._MultiplayerOption.bind(this)}/>}
                {this.state.gameType === GAME_TYPES.MUILTIPLAYER && this.state.multiplayerJoinMethod !== 0 && <Step3 select={this._CreateMultiplayerGame.bind(this)}/>}
            </div>
        )
    }
}

export default Welcome;