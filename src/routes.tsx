import React from "react";
// import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import NotFoundPage from "./components/404/404Page";

const Landing = React.lazy(() => import("./containers/Landing/Landing"));
const DetailsPage = React.lazy(
  () => import("./containers/DetailsPage/DetailsPage")
);
const CategoryListing = React.lazy(
  () => import("./containers/CategoryListing/CategoryListing")
);

const Routes = () => {
  // useEffect(() => {
  //   throw new Error("sample");
  // });
  return (
    <React.Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route
          exact
          path="/places/:place_name/:place_id"
          component={DetailsPage}
        />
        <Route
          exact
          path="/category/:ct_name/:ct_id"
          component={CategoryListing}
        />
        <Route component={NotFoundPage} />
      </Switch>

      <Footer />
    </React.Suspense>
  );
};

export default Routes;
