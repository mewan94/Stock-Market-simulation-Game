import React from "react";
import { Route, /*Redirect*/ } from "react-router-dom";

export default ({ component: C, props: cProps, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => <C {...props} {...cProps} />}
    />
  );
};
