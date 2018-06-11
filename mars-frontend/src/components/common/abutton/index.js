import React , {Component} from 'react';
import './button.css';

class AButton extends Component{
    render(){
        let type = this.props.type;

        if(this.props.type){
            switch (this.props.type){
                case 1:
                    type = "about-button";
                    break;
                case 2:
                    type = "help-button";
                    break;
                case 3:
                    break;
                default:
                    break;
            }
        }

        return(
            // <button id="but" className={classname}>{this.props.text}</button>
            <a href="#" type={type}>{this.props.text}</a>
        )
    }
}

export { AButton };