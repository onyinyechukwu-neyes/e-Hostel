import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

//Pages
const SchoolDetail = React.lazy(() =>
  import("./components/Schools/SchoolDetail")
);
const HomePage = React.lazy(() => import("./components/frontPage/HomPage"));
const VerifyPayment = React.lazy(() =>
  import("./components/studentDetails/VerifyPayment")
);
const loading = () => <div>loading...</div>;

const App = () => {
  return (
    <React.Suspense fallback={loading()}>
      <Switch>
        <Route
          path="/school-detail/:id"
          render={props => <SchoolDetail {...props} />}
        />
        <Route path="/verify" render={props => <VerifyPayment {...props} />} />
        <Route
          path="/"
          exact={true}
          render={props => <HomePage {...props} />}
        />

        <Redirect from="/?" to="/" />
      </Switch>
    </React.Suspense>
  );
};

export default App;
