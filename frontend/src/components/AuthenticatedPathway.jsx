import { Navigate } from 'react-router-dom';

const AuthenticatedPathway = ({ user, children }) => {
  if (!user) return <Navigate to="/login" replace />;
  return children;
};

export default AuthenticatedPathway;
