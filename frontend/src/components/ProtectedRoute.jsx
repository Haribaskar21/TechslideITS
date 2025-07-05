import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');
  const secret = import.meta.env.VITE_ADMIN_SECRET;

  if (!token) {
    return <Navigate to={`/${secret}/login`} replace />;
  }

  return children;
}
