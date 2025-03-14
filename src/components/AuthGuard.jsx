import { Navigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  return user ? children : <Navigate to="/signin" />;
};

export default AuthGuard;
