import React from "react";
import {NavLink} from "react-router-dom";
import './NavList.scss'

export default function NavList() {
    // This styling will be applied to a <NavLink> when the
    // route that it links to is currently selected.
    let activeStyle = {
        textDecoration: "underline",
    };


    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" style={({ isActive }) => isActive ? activeStyle : undefined}>
                        Main
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/counter" style={({ isActive }) => isActive ? activeStyle : undefined}>
                        Counter
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/bank" style={({ isActive }) => isActive ? activeStyle : undefined}>
                        Bank
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/video" style={({ isActive }) => isActive ? activeStyle : undefined}>
                        Watch Video
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/parralax" style={({ isActive }) => isActive ? activeStyle : undefined}>
                        Parralax Effect
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/todolist" style={({ isActive }) => isActive ? activeStyle : undefined}>
                        ToDoList
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" style={({ isActive }) => isActive ? activeStyle : undefined}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/counter2" style={({ isActive }) => isActive ? activeStyle : undefined}>
                        Counter2
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
