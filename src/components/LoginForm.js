//src/components/LoginForm.js
import React, { useState } from 'react';
import "./LoginForm.css";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic
    };

    return (
        <div className='wrapper'>
        <div className='login-form'>
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
                        <label>
                            <input type="checkbox"/>
                            Remember me
                        </label>
                        <a href="#">Forgot Password?</a>
                    </div>
                <button type="submit">Login</button>
            </form>
        </div>
        </div>
    );
};

export default LoginForm;
