// src/Title.js

import './Title.css';
import React from 'react'
import { NavLink } from 'react-router-dom';

function Title() {
    return (
        <div className="Title">
            <header>
                <h1>SFPOPOS</h1>
                    <div className="Title-Subtitle">
                        <h2>San Francisco Privately Owned Public Open Spaces</h2>
                    </div>
                    <div>
                    <NavLink
                        className="nav-link"
                        activeClassName="nav-link-active"
                        exact
                        to="/">List</NavLink>

                        <NavLink
                        className="nav-link"
                        activeClassName="nav-link-active"
                        to="/about">About</NavLink>
                    </div>
            </header>
        </div>

    )
    }

export default Title