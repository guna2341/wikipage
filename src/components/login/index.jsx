import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();
  React.useEffect(() => { 
    navigate('/login');
  }, []);
  
  return (
    <div>Login</div>
  )
}

