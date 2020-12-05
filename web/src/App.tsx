import React from "react";
import Routing from "./Routing";
import { ThemeProvider } from "styled-components";
import { GlobalStyleConst, theme } from "./assets/global_style";
function App() {
  return (
    <div className="App">
      <GlobalStyleConst />
      <ThemeProvider theme={theme}>
        <Routing />
      </ThemeProvider>
    </div>
  );
}

export default App;
