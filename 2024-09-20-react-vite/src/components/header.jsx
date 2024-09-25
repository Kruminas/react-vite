import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Header = () => {
    return (
        <header className="headerContainer">
            <input placeholder='🔍 Search...' className='header' aria-label='Search' />
            <h1 className={'headerTekstas'}>MAGDESIGN</h1>
            <div className='icons'>
            <i class="bi bi-twitter" ></i>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-distribute-vertical icon1"></i>
            </div>
        </header>
    );
};

export default Header;
