import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EmailForm.css';

const EmailForm = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/api/check-email', { email });

            if (response.data.exists) {
                navigate('/pick-dish', { state: { userInfo: response.data.userInfo } });
            } else {
                alert('No order found for this email.');
            }
        } catch (error) {
            console.error('There was an error checking the email!', error);
        }
    };

    return (
        <div className='email-from-container'>
            <form onSubmit={handleSubmit} className="email-form">
                <h2>Check your Order</h2>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your email'
                    required
                    className='email-input'
                />
                <button type="submit" className='submit-button'>Check Order</button>
            </form>
        </div>
    );
};

export default EmailForm;