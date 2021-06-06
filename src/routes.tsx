import React from "react";
import { Route, Switch } from "react-router-dom";

const Landing = React.lazy(() => import("./containers/Landing/Landing"));

const Routes = (): JSX.Element => {
  return (
    <React.Suspense fallback={<div>Loading</div>}>
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </React.Suspense>
  );
};

export default Routes;
