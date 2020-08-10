import React from 'react'
import {NavLink} from 'react-router-dom'
const NAvbar = () => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
        <div className="navbar-brand">
            Note Apppp 
        </div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="/" exact>Главная</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/above">Дополнительная</NavLink>
            </li>
        </ul>
    </nav>
)

export default NAvbar;