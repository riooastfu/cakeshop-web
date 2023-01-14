import React, { useState } from 'react'
import './sidebar.css'

export const Sidebar = () => {
    const [toggle, showMenu] = useState(false);
    return (
        <>
            <aside className={toggle ? "aside show-menuu" : "aside"}>
                <a href="#home" className="nav__logoo">
                    {/* <img src={Logo} alt="" /> */}
                    Noah
                </a>

                <nav className="navv">
                    <div className="nav__menuu">
                        <ul className="nav__listt">
                            <li className="nav__itemm">
                                <a href="#home" className="nav__linkk">
                                    <i className="icon-home"></i>
                                </a>
                            </li>

                            <li className="nav__itemm">
                                <a href="#menu" className="nav__linkk">
                                    <i className="icon-book-open"></i>
                                </a>
                            </li>

                            <li className="nav__itemm">
                                <a href="#about" className="nav__linkk">
                                    <i className="icon-user-following"></i>
                                </a>
                            </li>

                            <li className="nav__itemm">
                                <a href="#contact" className="nav__linkk">
                                    <i className="icon-bubble"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="nav__footer">
                    <span className="copyright">&copy; 2022 - 2023.</span>
                </div>
            </aside>

            <div className={toggle ? "nav__togglee nav__togglee-open" : "nav__togglee"} onClick={() => showMenu(!toggle)}>
                <i className="icon-menu"></i>
            </div>
        </>
    )
}
