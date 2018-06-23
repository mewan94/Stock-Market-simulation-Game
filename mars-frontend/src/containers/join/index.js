import React , {Component} from 'react';
import { joinGame } from '../../actions/user';
import { connect } from 'react-redux';
import * as userTypes from '../../types/user';
class Join extends Component{

    state={
        status:'validating'
    };

    componentWillMount(){
        console.log(this.props.match.params.gameid)
        this.props.dispatch(joinGame(this.props.match.params.gameid))
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.action === userTypes.JOIN_GAME_SUCCESS){
            this.props.history.push('/');
        }
        if(nextProps.action === userTypes.JOIN_GAME_FAIL){
            this.setState({
                status:'invalid game url'
            })
        }
    }

    render(){
        return(<div>
            <h2>{this.state.status}</h2>
        </div>)
    }
}

export default connect(
    state => {
        return {
            action: state.user.action
        }
    }
) (Join);