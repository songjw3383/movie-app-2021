import React from "react";
import { Link } from "react-router-dom"
import "./Navigation.css";

function Navigation() {
    return (
    <div className="nav">
        <h1>Wovie</h1>
        <ul>
            <li className="blocking">
                <div className="block">
                <Link to="/">Home</Link>
                <Link to="/">Interview</Link>
                <Link to="/">Contact</Link>
                <Link to="/about">About</Link>
                </div>
            </li>
        </ul>
    </div>
    );
}

export default Navigation;