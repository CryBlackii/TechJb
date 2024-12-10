import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; 

const Navbar = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    return (
        <header>
            <nav className="navBar">
                <div className="logo">
                    <Link to="/">
                        <img src="img/logo.png" style={{ width: '50%', height: 'auto' }} />
                    </Link>
                </div>
                <div className="navList">
                    <ul>
                        <li className="item"><Link to="/comunidade" className="link">Comunidade</Link></li>
                        <li className="item"><Link to="/setup" className="link">Criar Setup</Link></li>
                        <li className="item"><Link to="/ajuda" className="link">Ajuda</Link></li>
                    </ul>
                </div>
                <div className="botaobrabo">
                    <button><Link to="/login" className="link">Login</Link></button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
