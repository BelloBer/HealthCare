// src/components/LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import "./LoginForm.css";
import { auth } from '../firebase'; // Import the Firebase auth instance

const LoginForm = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // State to handle errors
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

    return (
        <div className='wrapper'>
            <div className='login-form'>
                <h3 className='goal'>Sign In</h3>
                {error && <p className='auth-error'>{error}</p>}
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
                        <a href="#">Forgot Password?</a>
                    </div>
                    <div className='goal'>
                        <button className='authButton' type="submit">Login</button>
                    </div>
                    <div className='changeAuth'>
                        <p>Don't have an account? <a href="/register">Sign Up</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
