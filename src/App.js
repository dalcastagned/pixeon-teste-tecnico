
import React, { useEffect, useState } from "react";
import GlobalStyle from "./styles/globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components'

import { lightTheme, darkTheme } from './styles/theme'
import Template from "./Template";
import Login from "./pages/Login";
import Scheduling from "./pages/Scheduling";
import AllScheduling from "./pages/AllScheduling";
import { SchedulingProvider } from "./context/SchedulingItems";

function App() {

  const [isDarkTheme, setIsDarkTheme] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("theme") === 'true') {
      setIsDarkTheme(true)
    } else {
      setIsDarkTheme(false)
    }
  }, []);

  return (
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <SchedulingProvider>
          <Router>
            <GlobalStyle />
            <Template isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} >
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/agendamento" element={<Scheduling />} />
                <Route path="/todos-agendamentos" element={<AllScheduling />} />
              </Routes>
            </Template>
          </Router>
        </SchedulingProvider>
      </ThemeProvider>
  );
}

export default App;
