import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import authSelectors from "redux/auth/authSelectors";

const PrivateRoute = (props) => {
  const isLoggedIn = useSelector(authSelectors.isLoggidIn);

  return <>{isLoggedIn ? <Outlet /> : <Navigate to="/signin" />}</>;
};

export default PrivateRoute;
