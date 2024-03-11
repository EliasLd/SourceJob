import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from '../auth/login';
import { Nav } from "./Nav";
import SignUp from '../auth/signUp';
import PlotJob from './PlotJob';
import PlotJobDetails from './PlotJobDetails'; // Importez le composant PlotJobDetails

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Nav />} />
                <Route path="/auth/login" element={<Login />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/jobs" element={<PlotJob />} />
                <Route path="/jobs/:id" element={<PlotJobDetails />} />
            </Routes>
        </Router>
    );
}
