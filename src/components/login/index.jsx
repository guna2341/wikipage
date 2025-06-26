import useGlobalStore from '@/store/global/globalStore';
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();
  const role = useGlobalStore(e => e.role);

  React.useEffect(() => {
    if (role) {
      navigate(`/${role}`);
    }
    else {
      navigate('/login');
    }
  }, []);

  return (
    <div>Login</div>
  )
}

