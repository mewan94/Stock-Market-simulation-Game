import React , {Component} from 'react';
import './button.css';

class AButton extends Component{
    render(){
        let { type } = this.props;

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
            <a type={type}>{this.props.text}</a>
        )
    }
}

export { AButton };