import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import { StyledUserNav } from "./StyledUserNav";
import { useSelector } from "react-redux";
import { getCurrentTheme } from "redux/theme/themeSelectors";

const UserNav = () => {
  const globalTheme = useSelector(getCurrentTheme);

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <StyledUserNav
          theme={globalTheme}
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          to="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </StyledUserNav>
        <StyledUserNav
          theme={globalTheme}
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          to="contacts"
        >
          <ContactsIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Contacts
        </StyledUserNav>
      </Breadcrumbs>
    </>
  );
};

export default UserNav;
