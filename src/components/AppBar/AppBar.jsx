import React from "react";
import AuthNav from "./AuthNav/AuthNav";
import AuthUser from "./AuthUser/AuthUser";
import { useSelector } from "react-redux";
import { StyledHeader } from "./StyledAppBar";
import UserNav from "./UserNav/UserNav";

import authSelectors from "redux/auth/authSelectors";

const AppBar = () => {
  const isUserLoggedIn = useSelector(authSelectors.isLoggidIn);

  return (
    <StyledHeader isLoggedin={isUserLoggedIn}>
      {isUserLoggedIn ? (
        <>
          <UserNav />
          <AuthUser />
        </>
      ) : (
        <AuthNav />
      )}
    </StyledHeader>
  );
};

export default AppBar;
