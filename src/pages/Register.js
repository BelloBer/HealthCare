// src/pages/Register.js
import React, { useState } from 'react';
import "../components/LoginForm.css"

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle registration logic
    };

    return (
        <div>
            
            <div className='wrapper'>
                <div className='login-form'>
                <h3 className='goal'>Register</h3>
                <form onSubmit={handleSubmit}>
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
