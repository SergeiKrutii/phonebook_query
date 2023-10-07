import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Suspense, lazy, useEffect } from "react";
import Container from "components/common/Container/Container";

import AppBar from "components/AppBar/AppBar";
import PrivateRoute from "components/pages/PrivateRoute/PrivateRoute";
import PublicRoute from "components/pages/PublicRoute/PublicRoute";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useGetCurrentUserMutation } from "redux/auth/authApiSlice";
import authSelectors from "redux/auth/authSelectors";

const HomePage = lazy(() => import("./components/pages/HomePage/HomePage"));
const ContactsPage = lazy(() =>
  import("./components/pages/ContactsPage/ContactsPage")
);
const SignupPage = lazy(() =>
  import("./components/pages/SignupPage/SignupPage")
);
const SigninPage = lazy(() =>
  import("./components/pages/SigninPage/SigninPage")
);

const theme = createTheme({
  palette: {
    white: {
      main: "#68707b",
      contrastText: "#fff",
    },

    text: {
      secondary: "#ffffffs34",
    },
  },
});

const App = (props) => {
  const [getCurrentUser, { isLoading }] = useGetCurrentUserMutation();
  const currentUserName = useSelector(authSelectors.selectUserName);

  useEffect(() => {
    if (currentUserName === null) {
      return;
    }
    getCurrentUser();
  }, [currentUserName, getCurrentUser]);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        {isLoading ? (
          <Skeleton count={5} />
        ) : (
          <>
            <AppBar />
            <Suspense>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route element={<PrivateRoute />}>
                  <Route path="contacts" element={<ContactsPage />} />
                </Route>
                <Route element={<PublicRoute />}>
                  <Route path="signin" element={<SigninPage />} />
                </Route>
                <Route element={<PublicRoute />}>
                  <Route path="signup" element={<SignupPage />} />
                </Route>
              </Routes>
            </Suspense>
          </>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default App;
