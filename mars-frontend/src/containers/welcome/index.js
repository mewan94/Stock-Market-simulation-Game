import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Button } from '../../components/common';
import image1 from '../../assets/imgs/backgroundimg.png';
import image2 from '../../assets/imgs/bgart.png';
import DialogBox from "../../components/dialogBox/index";
import Step1 from "./step1";
import { GAME_JOIN_MODE } from "../../types/common";
import Step2 from "./step2";
import {userRegistration, startGame, joinGame, joinexistinggame, userSuccessfullyJoined, startGameByAdmin, initRoundOne} from '../../actions/user';
import * as AuthActions from '../../types/user';
import { startGameSoc } from '../../api';

class Welcome extends Component {

    constructor(props){
        super(props);
        this.state={
            isPopupOpen:false,
            userName: '',
            gameStartMode:null,
            step:null,
            gameID:null,
            playerList:[],
            gameCode:null
        };
    }

    _openPopup = () => {
        this.setState({
            isPopupOpen:true
        });
    };

    _closePopUp = () => {
        this.setState({
            isPopupOpen:false
        });
    };

    _getName = (name) => {
        this.setState({
            userName:name
        })
    };

    _getStartMode = (GameMode) => {
        this.setState({
            gameStartMode:GameMode
        });

        if(this.state.userName !== ''){
            this.props.dispatch(userRegistration(this.state.userName));
        }
    };

    _getStep = (step) => {
        this.props.dispatch(userRegistration(this.state.userName));
        this.setState({
            step: step
        })
    };

    _startGame = () => {
        this.props.dispatch(startGameByAdmin(this.state.gameCode))
    };

    componentWillMount(){
        if(this.props.user.game.gameID){
            this.setState({
                gameStartMode:GAME_JOIN_MODE.JOIN,
                isPopupOpen:true
            })
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.user.action === AuthActions.USER_REGISTER_SUCCESS){
            if(this.state.gameStartMode === GAME_JOIN_MODE.CREATE){
                this.props.dispatch(startGame())
            }else if(this.state.gameStartMode === GAME_JOIN_MODE.JOIN){
                this.props.dispatch(joinexistinggame(nextProps.user.game.gameID))
            }
        }

        if(nextProps.user.action === AuthActions.JOIN_EXISTING_GAME_SUCCESS){
            this.setState({
                gameCode:nextProps.user.game.gameID,
            })
            startGameSoc(nextProps.user.game.gameID,(d)=>{
                if(d.action === 'start'){
                    console.log(d)
                    this.props.dispatch(initRoundOne(d.data,nextProps.user.user.balance))
                }else if(d.action === 'join'){
                    this.props.dispatch(userSuccessfullyJoined(d.data))
                }
            });
        }

        if(nextProps.user.action === AuthActions.CREATE_GAME_SUCCESS){
            startGameSoc(nextProps.user.game.gameID,(d)=>{
                if(d.action === 'start'){
                    this.props.dispatch(initRoundOne(d.data,nextProps.user.user.balance))
                }else if(d.action === 'join'){
                    this.props.dispatch(userSuccessfullyJoined(d.data))
                }
            });
            this.setState({
                gameID:"http://localhost:3000/join/"+nextProps.user.game.gameID,
                gameCode:nextProps.user.game.gameID,
                gameStartMode:GAME_JOIN_MODE.CREATE,
                playerList:nextProps.user.game.playerList
            })
        }

        if(nextProps.user.action === AuthActions.USER_SUCCESSFULLY_JOINED){
            this.setState({
                playerList:nextProps.user.game.playerList
            })
        }

        if(nextProps.user.action === AuthActions.INIT_ROUND_ONE){
            console.log('init');
            this.props.history.push('/play/'+this.state.gameCode)
        }
    }

    render() {


        return (
            <div className="background">
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
                            <Button text={"Start Game"} type={"b1"} isLink={"true"} 
                            onclick={this._openPopup.bind(this)}/>
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
                    {this.state.isPopupOpen && <DialogBox>
                        {this.state.gameStartMode !== GAME_JOIN_MODE.CREATE && <Step1 close={this._closePopUp.bind(this)} submit={this._getName.bind(this)} getMode={this._getStartMode.bind(this)} joinMode={this.state.gameStartMode}/>}
                        {this.state.gameStartMode === GAME_JOIN_MODE.CREATE && this.state.userName !== null && <Step2 close={this._closePopUp.bind(this)} getStep={this._getStep.bind(this)} gameid={this.state.gameID} gameList={this.state.playerList} start={this._startGame.bind(this)}/>}
                    </DialogBox>}
                </div>
            </div>
        )
    }
}

export default connect(
    state => {
        return {
            user: state.user
        }
    }

)(Welcome);