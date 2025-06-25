import useGlobalStore from '@/store/global/globalStore';
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const PageRoutes = () => {
    const navigate = useNavigate();
    const role = useGlobalStore(e => e.role);
    
    React.useEffect(() => {
     if (role === "faculty") {
        navigate(`${role}`);
    }
    else if (role === "admin") {
        navigate(`${role}`);
    }
    else if (role === "student") {
        navigate(`${role}`);
    }
    else {
        navigate("/login");
    }
    },[]);
  
}

