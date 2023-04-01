import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { Loading } from "../Loading/Loading";

const ProtectedRoutes = () => {
  const { user, loading } = useContext(UserContext);
  const location = useLocation();

  if (!!loading) {
    return <Loading></Loading>;
  }
  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/Login" replace state={{ from: location }} />
  );
};

export default ProtectedRoutes;
