import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { MaterialUISwitch } from "./styledSwitch";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentTheme } from "redux/theme/themeSelectors";
import { createTheme } from "@mui/material";
import { setLightTheme, setDarkTheme } from "redux/theme/themeSlice";

export default function ThemeSwitcher() {
  const globalTheme = useSelector(getCurrentTheme);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    if (globalTheme === "light") {
      dispatch(setDarkTheme());
    } else {
      dispatch(setLightTheme());
    }
  };

  const theme = createTheme({
    palette: {
      mode: globalTheme,
    },
  });

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <MaterialUISwitch
            theme={theme}
            onChange={toggleTheme}
            sx={{ m: 1, position: "absolute" }}
            defaultChecked
          />
        }
      />
    </FormGroup>
  );
}
