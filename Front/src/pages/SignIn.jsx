import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../styles/App.css";
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions';

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
     
    const dispatch = useDispatch()

    const { error } = useSelector((state) => state.userLogin)
    const { token } = useSelector((state) => state.userLogin)

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <>
            {token ? (
                <Navigate to={`/profile`} />
            ) : (
                <div className='body'>
                    <Header />
                    <main className='main bg-dark'>
                        <section className='sign-in-content'>
                            <FontAwesomeIcon icon={faCircleUser} className="sign-in-icon" />
                            <h1>Sign In</h1>
                            <form onSubmit={submitHandler}>
                                <div className='input-wrapper'>
                                    <label htmlFor="username">Username</label>
                                    <input
                                        type="text"
                                        id="username"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        required
                                    />
                                </div>
                                <div className='input-wrapper'>
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                        required
                                    />
                                </div>
                                <div className='input-remember'>
                                    <input type="checkbox" id="remember-me" />
                                    <label htmlFor="remeber-me">Remember me</label>
                                </div>
                                <button type="submit" className='sign-in-button'>Sign In</button>
                                </form>
                                {error && (
                                    <div>
                                        <br />
                                        {error}
                                    </div>
                                )}
                        </section>
                    </main>
                    <Footer />    
                </div>  
            )}
        </>
    )
}

export default SignIn