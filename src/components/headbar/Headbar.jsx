import React from 'react'
import "./headbar.css"

export const Headbar = () => {
    return (
        <header>
            <nav className='nav'>
                <a href='#home' className='nav__title'>Noah.</a>
                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#menu" className="nav__link">
                                Menu
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="nav__socials">
                    <a href="https://www.instagram.com/" className="home__social-link" target="_blank">
                        <i class="fa-brands fa-instagram"/>
                    </a>
                    <a href="https://www.facebook.com/" className="home__social-link" target="_blank">
                        <i class="fa-brands fa-facebook"/>
                    </a>
                    <a href="https://wa.wizard.id/4b2f88" className="home__social-link" target="_blank">
                        <i class="fa-brands fa-whatsapp"/>
                    </a>
                </div>
            </nav>
        </header>

    )
}
