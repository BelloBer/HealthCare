import React, { useEffect} from 'react';
import { useNavigate} from 'react-router-dom';

const Logout = ({ onLogout}) => {
    const navigate = useNavigate();

    useEffect(() => {
        onLogout();
        navigate('/login');
    }, [onLogout, navigate]);

    return <p>Logging out....</p>;
}

export default Logout;