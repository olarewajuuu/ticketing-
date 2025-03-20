import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignOut = ({ setCurrentUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("currentUser");
    sessionStorage.clear();
    setCurrentUser(null);
    navigate("/signin");
  }, [navigate, setCurrentUser]);

  return <h1 className="text-2xl font-bold text-center mt-20">Signing out...</h1>;
};

export default SignOut;
