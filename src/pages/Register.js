// src/pages/Register.js
import React, { useState } from 'react';
import "../components/LoginForm.css";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Import from firebase.js
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // State to handle errors
    const [success, setSuccess] = useState(false); // State to handle successful registration
    const navigate = useNavigate();

    const handleAuth = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log('User registered');
            setSuccess(true);
            setTimeout(() => {
                navigate('/login');
            }, 3000); // Redirect to login after 3 seconds
        } catch (error) {
            setError('Error during authentication: ' + error.message);
            console.error('Error during authentication:', error);
        }
    };


    return (
        <div className='registerform'>
            <div className='wrapper'>
                <div className='login-form'>
                    <h3 className='goal'>Register</h3>
                    {error && <p className='auth-error'>{error}</p>}
                    {success ? (
                        <p className='auth-success'>Registration successful! Redirecting to login...</p>
                    ) : (
                        <form onSubmit={handleAuth}>
                            <div className='input-box'>
                                <label>Firstname:</label>
                                <input
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='input-box'>
                                <label>Lastname:</label>
                                <input
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
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
                    )}
                </div>
            </div>
        </div>
    );
};

export default Register;
