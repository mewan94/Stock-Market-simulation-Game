import React , {Component} from 'react';
import image3 from '../../assets/imgs/startup.png';
import { Button } from '../../components/common';
import { Input } from '../../components/common';

class Step1 extends Component{
    render(){
        let title = "Start Game";
        let description = "play with your friends or against AI";
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
                            <Input type="password" text="Enter Your Nick Name"/>
                        </div>
                    </div>
                    <div className="content-center">
                        <img src={image3} alt=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="content-center">
                        <Button text="Create New Game" type={"b1"} isLink="true"/>
                        <br/>
                        <Button text="Join To Existing" type={"b2"} isLink="true"/>
                    </div>
                    <div className="content-center bottom-align">
                        <Button text="Home" type={"b3"} isLink="true" onclick={close}/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Step1;