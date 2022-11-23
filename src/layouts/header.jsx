import React, { useState, useEffect } from 'react';
import BackDrop from '../components/common/BackDrop';

function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const themeInLocalStorage = JSON.parse(localStorage.getItem('theme'));
    const [theme, setTheme] = useState(themeInLocalStorage);

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme));
        document.body.className = theme;
    }, [theme]);

    return (
        <header className="header" id="header">
            <BackDrop customClass={toggleMenu ? 'block' : 'none'} closeDrawer={() => setToggleMenu(false)} />
            <nav className="nav">
                <div className={`nav__menu ${toggleMenu ? 'show-menu' : ''}`} id="nav-menu">

                    {/****** Close Button ******/}
                    <div className="nav__close" id="nav-close" onClick={() => setToggleMenu(false)}>
                        <i className="ri-arrow-left-line"></i>
                    </div>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                <i className="ri-article-line"></i>News
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                <i className="ri-article-line"></i> Articles
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                <i className="ri-article-line"></i> Services
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                <i className="ri-article-line"></i> Projects
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="nav__brand">
                    {/****** Toggle Button ******/}
                    <div className="nav__toggle" id="nav-toggle" onClick={() => setToggleMenu(true)}>
                        <i className="ri-menu-4-line"></i>
                    </div>
                    <a href="#" className="nav__logo">RGN NEWS</a>
                </div>
                <div className="nav__buttons">
                    {/****** Themes Change Button ******/}
                    {
                        theme && theme === "dark-theme" ?
                        <i className="ri-moon-line change-theme" id="theme-button" onClick={() => setTheme('light-theme')}></i>
                        :
                        <i className="ri-sun-line change-theme" id="theme-button" onClick={() => setTheme('dark-theme')}></i>
                    }
                </div>
            </nav>
        </header>

    );
}

export default Header;