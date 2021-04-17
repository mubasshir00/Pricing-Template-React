import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
function Header() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        }
        else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)
   
    return (
       <header id="header">
           <div className="header-container">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <Link className="navbar-brand" to="/">Pricing Example</Link>
                        <div className="menu-icon" onClick={handleClick}>
                            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                        </div>
                        <div className="collapse navbar-collapse">
                            <ul className={click ? 'navbar-nav nav ms-auto nav-menu active' : 'navbar-nav nav ms-auto nav-menu'}>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Features</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Enterprise</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Support</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Pricing</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
           </div>
       </header>
    )
}

export default Header
