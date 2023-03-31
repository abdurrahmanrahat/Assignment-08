import React from 'react';
import './Navbar.css';
import NavbarPhoto from '../../images/navbar-photo.jpg';

const Navbar = () => {
    return (
        <div>
            <nav className='navbar'>
                <h2>Going Up</h2>
                <img src={NavbarPhoto} alt="" />
            </nav>
            <div className='hr-container'>
                <hr />
            </div>
        </div>
    );
};

export default Navbar;