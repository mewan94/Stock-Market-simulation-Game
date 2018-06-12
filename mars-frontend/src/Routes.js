import React from "react";
import { Switch } from "react-router-dom";
import asyncComponent from "./containers/AsyncComponent";
//import AuthenticatedRoute from "./containers/routes/AuthenticatedRoute";
import UnauthenticatedRoute from "./containers/routes/UnauthenticatedRoute";

const Welcome = asyncComponent(() => import("./containers/welcome"));
const Game = asyncComponent(() => import("./containers/game"));

export default ({childProps}) =>
    <Switch>
        <UnauthenticatedRoute path="/" exact component={Welcome} props={childProps} />
        <UnauthenticatedRoute path="/play" exact component={Game} props={childProps} />
    </Switch>