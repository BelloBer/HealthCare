// src/components/LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import "./LoginForm.css";
import { auth } from '../firebase'; // Import the Firebase auth instance

const LoginForm = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // State to handle errors
    const [resetEmail, setResetEmail] = useState('');
    const [showResetForm, setShowResetForm] = useState(false);
    const [resetMessage, setResetMessage] = useState(''); // State to handle reset messages
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signInWithEmailAndPassword(auth, email, password);
            onLogin();
            navigate('/home');
        } catch (error) {
            setError('Invalid email or password. Please try again.');
            console.error('Error during login:', error);
        }
    };

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        setResetMessage('');
        setError('');
        try {
            await sendPasswordResetEmail(auth, resetEmail);
            setResetMessage('Password reset email sent! Please check your inbox.');
        } catch (error) {
            setError('Error sending password reset email: ' + error.message);
            console.error('Error sending password reset email:', error);
        }
    };

    return (
        <div className='wrapper'>
            <div className='login-form'>
                <h3 className='goal'>Sign In</h3>
                {error && <p className='auth-error'>{error}</p>}
                {resetMessage && <p className='auth-success'>{resetMessage}</p>}
                {!showResetForm ? (
                    <form onSubmit={handleSubmit}>
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
                        <div className="remember-forgot">
                            <label className='rememberMe'>
                                <input type="checkbox" />
                                Remember me
                            </label>
                            <a href="#" onClick={() => setShowResetForm(true)}>Forgot Password?</a>
                        </div>
                        <div className='goal'>
                            <button className='authButton' type="submit">Login</button>
                        </div>
                        <div className='changeAuth'>
                            <p>Don't have an account? <a href="/register">Sign Up</a></p>
                        </div>
                    </form>
                ) : (
                    <form onSubmit={handlePasswordReset}>
                        <div className='input-box'>
                            <label>Enter your email to reset password:</label>
                            <input
                                type="email"
                                value={resetEmail}
                                onChange={(e) => setResetEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className='goal'>
                            <button className='authButton' type="submit">Send Reset Email</button>
                        </div>
                        <div className='changeAuth'>
                            <p><a href="#" onClick={() => setShowResetForm(false)}>Back to Login</a></p>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

    
export default LoginForm;
