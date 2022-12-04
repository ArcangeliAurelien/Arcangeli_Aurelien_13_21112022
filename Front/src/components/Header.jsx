import React from "react";
import { Link, useNavigate } from "react-router-dom";
import argentBankLogo from "../assets/argentBankLogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faSignOut } from "@fortawesome/free-solid-svg-icons";
import "../styles/Header.css";
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from "../redux/actions";

export default function Header() {
    let navigate = useNavigate()
    const dispatch = useDispatch()

    const { token } = useSelector((state) => state.userLogin)
    const { firstName } = useSelector((state) => state.userProfile)

    const logOutHandler = () => {
        dispatch(logOut())
        navigate(`/`)
    }

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
                {!token ? (
                    <Link to={`/login`} className="main-nav-item">
                        <FontAwesomeIcon icon={faCircleUser} className="HeaderIcon" />
                        Sign In
                    </Link>
                ) : (
                    ''
                )}
                {token ? (
                    <Link to={`/profile`} className="main-nav-item">
                        <FontAwesomeIcon icon={faCircleUser} className="HeaderIcon" />
                        {firstName}
                    </Link>   
                ) : (
                    ''
                )}
                {token ? (
                    <Link onClick={logOutHandler} to={`/`} className="main-nav-item" >
                        <FontAwesomeIcon icon={faSignOut} className="HeaderIcon" />
                        Sign Out
                    </Link>
                ) : (
                    ''
                )}
            </div>
        </nav>
    )
}