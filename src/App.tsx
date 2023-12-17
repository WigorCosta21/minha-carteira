import { ThemeProvider } from "styled-components";

import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";

import dark from "./styles/themes/dark";

import GlobalStyles from "./styles/GlobalStyles";

const App = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout>
        <Dashboard />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
