import { ThemeProvider } from "styled-components";

import dark from "./styles/themes/dark";

import Routes from "./routes";

import { useTheme } from "./hooks/themes";

import GlobalStyles from "./styles/GlobalStyles";

const App = () => {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
