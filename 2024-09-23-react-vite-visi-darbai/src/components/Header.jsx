import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const Header = () => {
    return (
        <header style={{textAlign: 'center'}}> 
        <li><Link to="/">Home</Link></li>
        <li><Link to="/WebPage">1 darbas</Link></li>
        <li><Link to="/List">2 darbas</Link></li>
        <li><Link to="/Password">3 darbas</Link></li>
        <li><Link to="/Prekes">4 darbas</Link></li>
        </header>
    );
}

export default Header;