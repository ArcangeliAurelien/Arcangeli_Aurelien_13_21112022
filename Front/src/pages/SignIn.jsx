import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Footer from '../components/Footer';
import HeaderLogin from '../components/HeaderLogin';
import "../styles/App.css";
import axios from "../api/axios";
import { Navigate } from 'react-router-dom';
//import { useDispatch } from 'react-redux';
//import { signIn } from '../redux/authSlice';

const LOGIN_URL = '/login';

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);

    //const dispatch = useDispatch()

    const handleTheClick = async (e) => {
        e.preventDefault();
        //console.log(email, password);
        
        //dispatch(signIn({email, password}))
        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ email, password }),
                {
                    headers: { 'content-type': 'application/json' },
                }
            )
            console.log(response);
            setEmail("")
            setPassword("")
            setSuccess(true)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            {success ? (
                <Navigate to={`/profile`} />
            ) : (
                <div className = "body">
                    <HeaderLogin />
                    <main className='main bg-dark'>
                        <section className='sign-in-content'>
                            <FontAwesomeIcon icon={faCircleUser} className="sign-in-icon" />
                            <h1>Sign In</h1>
                            <form>
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
                                        required />
                                </div>
                                <div className='input-remember'>
                                    <input type="checkbox" id="remember-me" />
                                    <label htmlFor="remeber-me">Remember me</label>
                                </div>
                                <button onClick={handleTheClick} className='sign-in-button' >Sign In</button>
                            </form>
                        </section>
                    </main>
                    <Footer />
                </div>
            )}
        </>
    )
}

export default SignIn