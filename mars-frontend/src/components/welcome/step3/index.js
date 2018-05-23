import React , {Component} from 'react';

class Step3 extends Component{

    _onSelection = (selection) => {
        if(selection){
            this.props.select(this.refs.name.value)
        }else{
            this.props.select(selection)
        }
    };

    render(){
        return(
            <div>
                <div className="py-5 text-center"
                     style={{ backgroundImage: 'url(&quot;https://pingendo.github.io/templates/sections/assets/cover_event.jpg&quot;)' }}>
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="display-3 mb-4 text-primary">Host New Game</h1>
                                <p className="lead mb-5">Enter your name and create your own game</p>
                                <input type="text" ref="name" defaultValue="player 1"/>
                                <a className="btn mx-1 btn-secondary btn-lg" onClick={this._onSelection.bind(this,true)}>Create</a>
                                <a className="btn btn-lg btn-primary mx-1" onClick={this._onSelection.bind(this,false)}>Go Back</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <a className="btn btn-primary w-25 d-flex" href="#">Exit </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export { Step3 };