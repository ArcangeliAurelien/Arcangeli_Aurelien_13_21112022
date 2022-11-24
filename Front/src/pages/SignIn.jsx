import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Footer from '../components/Footer';
import Header from '../components/Header';
import "../styles/App.css";

function SignIn() {
    return (
        <div className="body">
            <Header />
            <main className='main bg-dark'>
                <section className='sign-in-content'>
                    <FontAwesomeIcon icon={faCircleUser} className="sign-in-icon" />
                    <h1>Sign In</h1>
                    <form>
                        <div className='input-wrapper'>
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" />
                        </div>
                        <div className='input-wrapper'>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" />
                        </div>
                        <div className='input-remember'>
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remeber-me">Remember me</label>
                        </div>
                        <button className='sign-in-button'>Sign In</button>
                    </form>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default SignIn