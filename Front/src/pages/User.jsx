import Footer from "../components/Footer"
import Header from "../components/Header"
import "../styles/App.css";
import "../styles/User.css";
import { useState, useRef } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../redux/actions";

function User() {   
    const [editName, setEditName] = useState('')
    const [newFirstName, setNewFirstName] = useState()
    const [newLastName, setNewLastName] = useState()

    const ref = useRef()
    const dispatch = useDispatch()
    
    const { firstName } = useSelector((state) => state.userProfile)
    const { lastName } = useSelector((state) => state.userProfile)
    const { token } = useSelector((state) => state.userLogin)
    const { success } = useSelector((state) => state.userLogin)

    const editNameButton = (e) => {
        e.preventDefault()
        setEditName((current) => !current)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateProfile(token, newFirstName, newLastName))
        if ({ success }) {
            setEditName((current) => !current)
        }
    }

    return (
        <div>
            <Header />
            <main className="main bg-dark">
                <>
                    {!editName ? (
                            <div className="header">
                                <h1>Welcome back<br />{firstName} {lastName}!</h1>
                                <button onClick={editNameButton} className="edit-button">Edit Name</button>
                            </div>
                    ) : (
                            <div className="header">
                                <h1>Welcome back</h1>
                                <form onSubmit={submitHandler} className="editContent">
                                    <div className="editInput">
                                        <input type="text" ref={ref} placeholder={firstName} onChange={(e) => { setNewFirstName(e.target.value) }} />
                                        <input type="text" ref={ref} placeholder={lastName} onChange={(e) => { setNewLastName(e.target.value) }} />
                                    </div>
                                    <div>
                                        <button type="submit" className="edit-button">Save</button>
                                        <button onClick={editNameButton} className="edit-button">Cancel</button>
                                    </div>
                                </form>
                            </div>
                    )}
                </>
                <h2 className="sr-only">Accounts</h2>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                        <p className="account-amount">$2,082.79</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                        <p className="account-amount">$10,928.42</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                        <p className="account-amount">$184.30</p>
                        <p className="account-amount-description">Current Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default User