import Footer from "../components/Footer"
import Header from "../components/Header"
import "../styles/App.css";
import "../styles/User.css";
import { useState, useRef } from 'react'

function User() {   
    const [editName, setEditName] = useState(false)
    const [firstName, setFirstName] = useState('Tony')
    const [lastName, setLastName] = useState('Jarvis')

    const ref = useRef()
    
    const handleClick = () => {
        setEditName((editName) => !editName)
    }
    const updateValue = () => {
        setEditName(false)
    }

    return (
        <div>
            <Header />
            <main className="main bg-dark">
                <>
                    {!editName ? (
                            <div className="header">
                                <h1>Welcome back<br />{firstName} {lastName}!</h1>
                                <button onClick={handleClick} className="edit-button">Edit Name</button>
                            </div>
                    ) : (
                            <div className="header">
                                <h1>Welcome back</h1>
                                <form>
                                    <input type="text" ref={ref} value={firstName} onChange={(e) => {setFirstName(e.target.value)}} />
                                    <input type="text" ref={ref} value={lastName} onChange={(e) => {setLastName(e.target.value)}} />
                                </form>
                                <div>
                                    <button onClick={updateValue} className="edit-button">Save</button>
                                    <button onClick={handleClick} className="edit-button">Cancel</button>
                                </div>
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