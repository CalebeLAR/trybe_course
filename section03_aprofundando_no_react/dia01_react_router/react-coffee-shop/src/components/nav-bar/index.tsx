// src/components/nav-bar/index.tsx

import { NavLink } from 'react-router-dom';
import './nav-bar.css'

function NavBar() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <br />
            <NavLink to="/coffees">Cafés</NavLink>
        </nav >
    )
}

export default NavBar;
