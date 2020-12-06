import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyleConst, theme } from "./assets/global_style";
import Home from "./pages/Home/Home";
import Trailers from "./pages/Trailers/Trailers";
import { AppContext, AppProvider } from "./store/context";

function App() {
  const { is_login } = useContext(AppContext);

  return (
    <div className="App">
      <GlobalStyleConst />
      <ThemeProvider theme={theme}>
        {is_login ? <Trailers /> : <Home />}
      </ThemeProvider>
    </div>
  );
}
const AppWrapper = () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
};
export default AppWrapper;
