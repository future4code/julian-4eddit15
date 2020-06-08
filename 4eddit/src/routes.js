import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Feed from './pages/Feed/index';
import Login from './pages/Login/index';
import Post from './pages/Post/index';
import Register from './pages/Register/index';

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