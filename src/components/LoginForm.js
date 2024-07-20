//src/components/LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./LoginForm.css";

const LoginForm = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic

        onLogin();
        navigate('/home');
    };

    return (
        <div className='wrapper'>
        <div className='login-form'>
            <h3 className='goal'>Sign In</h3>
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
                            <input type="checkbox"/>
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
