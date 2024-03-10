import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from '../auth/login';
import { Nav } from "./Nav";
import  SignUp from '../auth/signUp';

export default function AppRouter() {
    return(
        <Router>
            <Routes>
                <Route path="/" exact Component={Nav} />
                <Route path="/auth/login" exact Component={Login} />
                <Route path="/signUp" exact Component={SignUp} />
            </Routes>
        </Router>
    );
}