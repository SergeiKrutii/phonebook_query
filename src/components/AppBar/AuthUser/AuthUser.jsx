import { useSelector } from "react-redux";
import { StyledAuthUser } from "./StyledAuthUser";
import { Avatar } from "@mui/material";
import authSelectors from "redux/auth/authSelectors";
import { useLogoutMutation } from "redux/auth/authApiSlice";

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function stringAvatar(name) {
  const firstLetter = name.charAt(0).toUpperCase();
  const lastLetter = name.charAt(name.length - 1).toUpperCase();

  return {
    sx: {
      bgcolor: getRandomColor(),
    },
    children: `${firstLetter}${lastLetter}`,
  };
}

const AuthUser = () => {
  const userName = useSelector(authSelectors.selectUserName);
  const [logout] = useLogoutMutation();

  return (
    <>
      <StyledAuthUser>
        <Avatar {...stringAvatar(userName)} />

        <button className="btngrad" type="button" onClick={() => logout()}>
          Log out
        </button>
      </StyledAuthUser>
    </>
  );
};

export default AuthUser;
