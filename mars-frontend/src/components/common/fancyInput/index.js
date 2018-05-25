import React , {Component} from 'react';
import './index.css';
import image from './Bubble-4.5s-528x96px.gif';

class FancyInput extends Component{

    constructor(props){
        super(props);
        this.state={
            typing:''
        }
    }

    _onKeyUp = (e) => {
        this.setState({
            typing:'lds-ripple'
        });
        setTimeout(() => {
            this.setState({
                typing:''
            })
        },2000);
        console.log(e.target.value)
    };

    render(){
        return(
            <div style={{backgroundImage:image}}>
            <div className={this.state.typing}><input onKeyUp={this._onKeyUp.bind(this)}/><div></div></div>
            </div>
        )
    }
}

export default FancyInput;