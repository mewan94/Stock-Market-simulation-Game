import React , {Component} from 'react';
import './button.css';

class Button extends Component{
    render(){
        let { type, isLink } = this.props;
        let classname = 'primary-button';
        if(type){
            switch (type){
                case 1:
                    classname = "about-button";
                    break;
                case 2:
                    classname = "help-button";
                    break;
                case 3:
                    break;
                default:
                    break;
            }
        }

        if(isLink){
            return(
                <a type={type} onClick={this.props.onclick} href={this.props.href}>{this.props.text}</a>
            )
        }else{
            return(
                <button className={classname} onClick={this.props.onclick}>{this.props.text}</button>
            )
        }
    }
}

export { Button };