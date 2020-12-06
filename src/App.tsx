import React, { useContext, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import {
  GlobalStyleConst,
  GlobalStyleConstLoading,
  FadeIn,
  theme,
} from "./assets/global_style";
import Home from "./pages/Home/Home";
import Trailers from "./pages/Trailers/Trailers";
import Loading from "./pages/Loading/Loading";
import { AppContext, AppProvider } from "./store/context";

function App() {
  const { is_login } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return (
      <div>
        <GlobalStyleConstLoading />
        <Loading />
      </div>
    );
  }
  return (
    <FadeIn key={is_login}>
      <GlobalStyleConst />
      <ThemeProvider theme={theme}>
        {is_login ? <Trailers /> : <Home />}
      </ThemeProvider>
    </FadeIn>
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
