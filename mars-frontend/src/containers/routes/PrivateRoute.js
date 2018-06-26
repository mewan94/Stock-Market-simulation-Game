import React from "react";
import { connect } from 'react-redux';
import { Route, Redirect } from "react-router-dom";
import { Loading } from '../../components/common';
import axios from 'axios';
import * as AuthActions from './../../actions/auth';

import { API } from '../../config/server';
const path = API + "/api/v1/system-user";



/*const fakeAuth = {
    isAuthenticated: true,
    authenticate(cb) {
        this.isAuthenticated = true
        setTimeout(cb, 1000)
    }
}*/

class PrivateRoute extends React.Component {

    //export default ({ component: Component, props: cProps, ...rest }) => {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            isAuthenticated: false,
        }

    }

    componentWillMount() {
        if(localStorage.getItem('token')){
            this.props.dispatch(AuthActions.initlogin(localStorage.getItem('token')));
        }
    }

    componentDidMount() {

        axios.post(`${path}/userDetails`, {}, { headers: { Authorization: localStorage.getItem('token') } }).then(response => {
            if (response.data.code === 200) {
                let user = response.data.data;
                if (!user) { // user does not exisit
                    this.setState({
                        loading: false,
                        isAuthenticated: false,
                    });
                } else if (user.SYSTEM_USER_MEMBER_TYPE < 3 && user.SYSTEM_USER_REGISTRATION_STEP === 3) { // company or networker user is ready to navigate
                    this.setState({
                        loading: false,
                        isAuthenticated: true,
                    });
                } else if (user.SYSTEM_USER_MEMBER_TYPE === 3 && user.SYSTEM_USER_REGISTRATION_STEP === 4) { // investor user is ready to navigate
                    this.setState({
                        loading: false,
                        isAuthenticated: true,
                    });
                } else { // authentication fail, user does not have priviledges to navigate
                    this.setState({
                        loading: false,
                        isAuthenticated: false,
                    });
                }
            } else { // invalid token or server authenication fail
                this.setState({
                    loading: false,
                    isAuthenticated: false,
                });
            }
        }).catch((exception) => { // server does not response
            this.setState({
                loading: false,
                isAuthenticated: false,
            });
        });
    }

    render() {
        const { component: Component, ...rest } = this.props;
        if (this.state.loading) { // wait until authenticating the user token
            return <Loading />;
        } else {
            return (
                <Route {...rest} render={props => (
                    <div>
                        {!this.state.isAuthenticated && <Redirect to={`/`} />}
                        <Component {...this.props} />
                    </div>
                )}
                />
            )
        }
    }

};

export default connect(state => {
    return {
        state
    };

})(PrivateRoute);
