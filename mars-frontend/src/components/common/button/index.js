import React , {Component} from 'react';

class Button extends Component{
    render(){
        let classname = 'primary-button';

        if(this.props.type){
            switch (this.props.type){
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

        return(
            <button className={classname}>{this.props.text}</button>
        )
    }
}

export { Button };