import React from "react";
import {Route, Switch } from 'react-router-dom';
//components
import Menu from './core/Menu';
import Home from './core/Home';
import Singin  from './User/Signin';
import Signup from "./User/Signup";
import Profile from './User/Profile';
import Users from './User/Users';
import EditPrifile from './User/EditProfile';
import PrivateRoute from './auth/PrivateRoute';

const MainRouter = () => (
    <div>
        <Menu />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/users"  exact component={Users}/> 
            <Route path="/signin" exact component={Singin} /> 
            <Route path="/signup" exact component={Signup} /> 
            <PrivateRoute path="/user/:userId" exact component={Profile} />
            <PrivateRoute path="/user/edit/:userId" exact component={EditPrifile} />
        </Switch>
    </div>
)

export default MainRouter;