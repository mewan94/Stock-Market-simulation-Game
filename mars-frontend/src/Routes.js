import React from "react";
import { Switch } from "react-router-dom";
import asyncComponent from "./containers/AsyncComponent";
import AuthenticatedRoute from "./containers/routes/AuthenticatedRoute";
import UnauthenticatedRoute from "./containers/routes/UnauthenticatedRoute";

const Welcome = asyncComponent(() => import("./containers/welcome"));
const Game = asyncComponent(() => import("./containers/game"));
const Account = asyncComponent(() => import("./containers/game/account"));
const Transactions = asyncComponent(() => import("./containers/game/transactions"));
const Join = asyncComponent(() => import("./containers/join/index"));

export default ({childProps}) =>
    <Switch>
        <UnauthenticatedRoute path="/" exact component={Welcome} props={childProps} />
        <UnauthenticatedRoute path="/join/:gameid" component={Join} props={childProps}/>
        <UnauthenticatedRoute path="/play/:gameID" component={Game} props={childProps} />
        <UnauthenticatedRoute path="/account" component={Account} props={childProps}/>
        <UnauthenticatedRoute path="/transactions" component={Transactions} props={childProps}/>
    </Switch>