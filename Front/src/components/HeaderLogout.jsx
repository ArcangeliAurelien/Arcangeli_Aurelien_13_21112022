import React from "react";
import { Link } from "react-router-dom";
import argentBankLogo from "../assets/argentBankLogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faSignOut } from "@fortawesome/free-solid-svg-icons";
import "../styles/Header.css"

function HeaderLogout() {
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
                <Link to={`/profile`} className="main-nav-item">
                    <FontAwesomeIcon icon={faCircleUser} className="HeaderIcon" />
                    Tony
                </Link>
                <Link to={`/`} className="main-nav-item">
                    <FontAwesomeIcon icon={faSignOut} className="HeaderIcon" />
                    Sign Out
                </Link>
            </div>
        </nav>
    )
}

export default HeaderLogout