// import React from "react";
// import { Route, Redirect } from "react-router-dom";


// export default ({ component: Component, props: cProps, ...rest }) => {
//     return (
//         <Route
//             {...rest}
//             render={props =>
//                 cProps.isAuthenticated && cProps.isAdmin
//                     ? <Component {...props} {...cProps} />
//                     : <Redirect to={`/`} />}
//         />
//     );
// };


import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Loading } from '../../components/common';
import axios from 'axios';

import { API } from '../../config/server';
const path = API + "/api/v1/system-user";

/*const fakeAuth = {
    isAuthenticated: true,
    authenticate(cb) {
        this.isAuthenticated = true
        setTimeout(cb, 1000)
    }
}*/

export default class AdminRoute extends React.Component {

    //export default ({ component: Component, props: cProps, ...rest }) => {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            isAuthenticated: false,
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
                } else if (user.SYSTEM_USER_MEMBER_TYPE === 5) { // company or networker user is ready to navigate
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