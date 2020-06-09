import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Feed from './components/pages/Feed/index';
import Login from './components/pages/Login/index';
import Post from './components/pages/Post/index';
import Register from './components/pages/Register/index';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <Feed />
                </Route>
                <Route path={"/login"}>
                    <Login />
                </Route>
                <Route path={"/register"}>
                    <Register />
                </Route>
                <Route path={"/post/:post_id"}>
                    <Post />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;