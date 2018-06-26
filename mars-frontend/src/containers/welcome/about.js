import React , {Component} from 'react';
import {Button} from '../../components/common/';

class About extends Component{

    _getContent = (type) => {
        if(type === 'about'){
            return(
                <div className="row adjest-height">
                    <div className="content">
                        <div className="content-container">
                            <h1 className="dialog-main-title">About the Game</h1>
                            <p>
                                Stock Mania is virtual stock market which helps you to be a pro in real stock market.
                                One Game is consist with 10 Rounds each rounds you will get a 1 minute to decide and buy or sell the stocks.
                                Using our stock market value representing graph player can get an idea how the stock market values getting change.
                                BUT NO ONE KNOWS WHAT WILL HEPPEN IN NEXT MOMENT.
                                Enjoy !
                            </p>
                        </div>
                    </div>
                </div>
            )
        }else{
            return(
                <div className="row adjest-height">
                    <div className="content" style={{paddingTop: 10+'px'}}>
                        <div className="content-container">
                            <h1 className="dialog-main-title">How to play</h1>
                            <p>
                                Step 01.<br/>
                                Start Game.<br/>
                                Host a Game.
                                Go to the Game Clicks on Start Game.
                                Enter your name.
                                Clicks on Create New game.
                                Share the link with your friends, to play with them (minimum player count is 3).
                                Enjoy !
                                Join to an existing game.
                                Get the game url from your friend.
                                Go to the url
                                Enter your name.
                                Clicks on joining to an existing.
                                Enjoy !
                            </p>
                        </div>
                    </div>
                    <div className="content-center" style={{paddingTop: 10+'px'}}>
                        <br/>
                        Step 02.<br/>
                        Game Play.<br/>
                        In Stock Mania You can buy and sell the stocks you are purchsing from the broker through out the game.
                        To win you should be smart enough to identify how the market values of the shares are getting change.
                        Only the smartest investor can win the game after all 10 rounds of the game.
                    </div>
                </div>
            )
        }
    };

    render(){
        return(
            <React.Fragment>
                {this._getContent(this.props.type)}
                <div className="row">
                    <div className="content-center bottom-align">
                        <Button text="Home" type={"b3"} isLink="true" onclick={this.props.close.bind(this)}/>
                    </div>
                </div>
            </React.Fragment>

        )

    }
}

export default About;