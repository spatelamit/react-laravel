import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuthRedirect from '../Common/useAuthRedirect';

function Logout() {
    const navigate = useNavigate();
    useAuthRedirect();

    const handleLogout = () => {
        axios
            .post(`${window.API_BASE_URL}/logout`, null, {
                headers: {
                    Authorization: `Bearer ${window.TOKEN}`,
                },
            })
            .then(() => {
                localStorage.removeItem('token');
                navigate('/login');
            })
            .catch((error) => {
                console.error('Logout failed:', error);
            });
    };

    useEffect(() => {
        if (localStorage.getItem('token') === null) {
            navigate('/login');
        }
        handleLogout();
        localStorage.removeItem('token');

    }, [localStorage.getItem('token')]);

    return (
        <>
          <p> <center> Please wait....</center></p>
        </>
    );
}

export default Logout;
