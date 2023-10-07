import { StyledContainer } from "./StyledContainer";
import GitHubIcon from "@mui/icons-material/GitHub";
import { getCurrentTheme } from "redux/theme/themeSelectors";
import { useSelector } from "react-redux";
import ThemeSwitcher from "components/common/Switch/ThemeSwitcher";

const Container = ({ children }) => {
  const globalTheme = useSelector(getCurrentTheme);
  return (
    <>
      <StyledContainer theme={globalTheme}>
        <ThemeSwitcher />
        {children}
        <p className="creator">
          Created by SK
          <a href="https://github.com/SergeiKrutii">
            <GitHubIcon
              sx={{ fill: globalTheme === "light" ? "" : "#ffffff" }}
            />
          </a>
        </p>
      </StyledContainer>
    </>
  );
};

export default Container;
