import React from "react";
import { Route, Switch } from "react-router-dom";

const Landing = React.lazy(() => import("./containers/Landing/Landing"));
const DetailsPage = React.lazy(
  () => import("./containers/DetailsPage/DetailsPage")
);
const CategoryListing = React.lazy(
  () => import("./containers/CategoryListing/CategoryListing")
);

const Routes = () => {
  return (
    <React.Suspense fallback={<div>Loading</div>}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/category/9023132" component={DetailsPage} />
        <Route
          exact
          path="/category/:ct_name/:ct_id"
          component={CategoryListing}
        />
      </Switch>
    </React.Suspense>
  );
};

export default Routes;
