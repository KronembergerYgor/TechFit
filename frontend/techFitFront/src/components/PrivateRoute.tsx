// src/components/PrivateRoute.tsx
import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getToken, clearToken, apiGet } from '../services/api';

function PrivateRoute() {
  const [status, setStatus] = useState<'checking' | 'authorized' | 'unauthorized'>(
    () => (getToken() ? 'checking' : 'unauthorized')
  );

  useEffect(() => {
    const token = getToken();

    if (!token) {
      return; // já nasceu como 'unauthorized', não precisa de setState aqui
    }

    apiGet('/me')
      .then(() => setStatus('authorized'))
      .catch(() => {
        clearToken();
        setStatus('unauthorized');
      });
  }, []);

  if (status === 'checking') {
    return <p>Verificando acesso...</p>;
  }

  if (status === 'unauthorized') {
    return <Navigate to="/Unauthorized" replace />;
  }

  return <Outlet />;
}

export default PrivateRoute;