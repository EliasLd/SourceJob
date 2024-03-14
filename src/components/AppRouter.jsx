import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from '../auth/login';
import { FirstPage } from './FirstPage';
import SignUp from '../auth/signUp';
import PlotJob from './PlotJob';
import PlotJobDetails from './PlotJobDetails';
import AddJob from './AddJob';
import Edit from "./Edit";

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<FirstPage />} />
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/signup" element={<SignUp />} />
                <Route path="/api/jobs" element={<PlotJob />} />
                <Route path="api/jobs/:id" element={<PlotJobDetails />} />
                <Route path="/api/jobs/addJob" element={<AddJob />} />
                <Route path="/api/jobs/edit/:id" element={<Edit />} />
            </Routes>
        </Router>
    );
}
