import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Loading from 'components/shared-components/Loading';


const Users = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Route path={`${match.url}/user-list`} component={lazy(() => import(`./user-list`))} />
      <Route path={`${match.url}/setting/:userId`} component={lazy(() => import(`./setting`))} />
    </Switch>
  </Suspense>
);

export default Users;