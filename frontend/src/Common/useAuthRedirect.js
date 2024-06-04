import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const useAuthRedirect = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login'); // Redirect to login page
        }
    }, []); // Empty dependency array ensures it runs once on component mount
};

export default useAuthRedirect;
