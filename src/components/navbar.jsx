import React from 'react';
import Dropdown from './dropdown.jsx';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src="logo.png" alt="Logo" />
            </div>
            <ul className="nav-links">
                <li><a href="#home">Ana Sayfa</a></li>
                <li><a href="#kurumsal">Kurumsal</a></li>
                <li>
                    <Dropdown title="Ürünlerimiz">
                        <a href="#urun1">Ürün 1</a>
                        <a href="#urun2">Ürün 2</a>
                        <a href="#urun3">Ürün 3</a>
                    </Dropdown>
                </li>
                <li><a href="#referanslar">Referanslar</a></li>
                <li><a href="#iletisim">İletişim</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
