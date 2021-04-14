import React from 'react'
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom'
import Register from '../pages/authentication/view/Register'
import Home from '../pages/Home'
import useAuthProvider from '../shared/hook/useAuthProvider'
import ProtectedRoutes from './Protected.routes'
import PublicRoutes from './Public.routes'

export default function Routes() {

    const [authState, _] = useAuthProvider();
    const { isAuth } = authState;
    return (
        <Router>
            <Switch>
                <Route

                    path="/"
                    exact
                    render={() =>
                        !isAuth ? <Redirect to="/register" /> : <Redirect to="/home" />}
                />
                <ProtectedRoutes path="/home" component={Home} auth={isAuth} />
                <PublicRoutes path="/register" component={Register} auth={isAuth} />
            </Switch>
        </Router>
    )
}
