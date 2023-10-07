import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import authSelectors from "redux/auth/authSelectors";

const PublicRoute = (props) => {
  const isLoggedIn = useSelector(authSelectors.isLoggidIn);

  return <>{isLoggedIn ? <Navigate to="/contacts" /> : <Outlet />}</>;
};

export default PublicRoute;
