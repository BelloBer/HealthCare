// src/pages/Register.js
import React, { useState } from 'react';
import "../components/LoginForm.css";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Import from firebase.js

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(true); // Changed to true for registration
    const [error, setError] = useState(''); // State to handle errors

    const handleAuth = async (e) => {
        e.preventDefault();
        setError('');
        try {
            if (isSignUp) {
                await createUserWithEmailAndPassword(auth, email, password);
                console.log('User registered');
            } else {
                await signInWithEmailAndPassword(auth, email, password);
                console.log('User signed in');
            }
        } catch (error) {
            setError('Error during authentication: ' + error.message);
            console.error('Error during authentication:', error);
        }
    };

    return (
        <div>
            <div className='wrapper'>
                <div className='login-form'>
                    <h3 className='goal'>Register</h3>
                    {error && <p className='auth-error'>{error}</p>}
                    <form onSubmit={handleAuth}>
                        <div className='input-box'>
                            <label>Name:</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className='input-box'>
                            <label>Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className='input-box'>
                            <label>Password:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className='goal'>
                            <button className='authButton' type="submit">Register</button>
                        </div>
                        <div className='changeAuth'>
                            <p>Already have an account? <a href="/login">Sign In</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
