import React, { Component } from 'react';
import Routes from "./Routes";
import { authUser } from "./libes/auth";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import './styles/App.css';

class App extends Component {

// this is me
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false,
            pageNotFound: false
        };
    }

    async componentDidMount() {
        try {

            if (await authUser()) {
                this.userHasAuthenticated(true);
            } else {
                this.userHasAuthenticated(false);
            }

        } catch (e) {
            alert(e);
        }
    }

    userHasAuthenticated = authenticated => {
        this.setState({ isAuthenticated: authenticated });
    };


  render() {
      const childProps = {
          isAuthenticated: this.state.isAuthenticated,
          userHasAuthenticated: this.userHasAuthenticated,
          pageNotFound: this.pageNotFound
      };

    return (
      <div className="App">
        <Routes childProps={childProps}/>
      </div>
    );
  }
}

const connectedContainer = connect(state => {
    return {
    };

})(App);

export default withRouter(connectedContainer);
