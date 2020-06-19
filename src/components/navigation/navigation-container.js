import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class NavigationComponent extends Component {
    constructor() {
        super();
    }
    

    render() {
        return (
            <div className="nav-wrapper">
            <div className="left-side">

                <div className="nav-link-wrapper">
                <NavLink exact to="/" activeClassName="nav-link-active">home</NavLink>
                </div>

                <div className="nav-link-wrapper">
                <NavLink to="/about-me" activeClassName="nav-link-active">about</NavLink>
                </div>

                <div className="nav-link-wrapper">
                <NavLink to="/contact" activeClassName="nav-link-active">contact</NavLink>
                </div>
                
                <div className="nav-link-wrapper">
                <NavLink to="/blog" activeClassName="nav-link-active">blog</NavLink>
                </div>



                </div>

                <div className="right-side">
                    GABRIEL SEGURA
                </div>
            </div>
        );
    }
}