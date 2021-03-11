import Loader from 'components/Loader/Loader';
import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import paths from './paths';

const LoginView = lazy(() =>
  import('../../views/LoginView' /* webpackChunkName: "LoginView" */),
);

const RegisterView = lazy(() =>
  import('../../views/RegisterView' /* webpackChunkName: "RegisterView" */),
);

const PhonebookView = lazy(() =>
  import('../../views/PhonebookView' /* webpackChunkName: "PhonebookView" */),
);

export default function Routes() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path={paths.HOME} exact component={LoginView} />

          <Route path={paths.REGISTER} exact component={RegisterView} />

          <Route path={paths.PHONEBOOK} exact component={PhonebookView} />

          <Redirect to={paths.HOME} />
        </Switch>
      </Suspense>
    </>
  );
}
