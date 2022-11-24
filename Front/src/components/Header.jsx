import React from "react";
import { Link } from "react-router-dom";
import argentBankLogo from "../assets/argentBankLogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import "../styles/Header.css"

function Header() {
    return (
        <nav className="main-nav">
            <Link to={`/`} className="main-nav-logo">
                <img
                    className="main-nav-logo-image"
                    src={argentBankLogo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                <Link to="" className="main-nav-item">
                    <FontAwesomeIcon icon={faCircleUser} className="HeaderIcon" />
                    Sign In
                </Link>
            </div>
        </nav>
    )
}

export default Header