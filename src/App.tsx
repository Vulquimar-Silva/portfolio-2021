import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { PageContainer } from "./pages/PageContainer";
import { GlobalStyle } from "./styles/global";
import { redTheme, greenTheme, blueTheme, lightPurpleTheme, orangeTheme, pinkTheme } from "./styles/themes"

// import usePersistedState from "styles/changeTheme";

export const changeTheme = (color: "red" | "green" | "blue" | "purple" | "orange" | "pink") => {
  localStorage.setItem("colorTheme", color);
};

export function App() {

  // const [colorTheme, setColorTheme] = usePersistedState("colorTheme", "red");

  const [color, setColor] = useState("red");
  const [theme, setTheme] = useState(redTheme)

  useEffect(() => {
    if (localStorage.getItem("colorTheme") != null) {
      setColor(localStorage.getItem("colorTheme")!);
    }
    switch (color) {
      case "red":
        setTheme(redTheme);
        break;
      case "green":
        setTheme(greenTheme);
        break;
      case "blue":
        setTheme(blueTheme);
        break;
      case "purple":
        setTheme(lightPurpleTheme);
        break;
      case "orange":
        setTheme(orangeTheme);
        break;
      case "pink":
        setTheme(pinkTheme);
        break;

      default:
        setTheme(redTheme);
    }
  }, [color])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PageContainer />
    </ThemeProvider>
  );
}
