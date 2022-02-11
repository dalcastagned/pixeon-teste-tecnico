import GlobalStyle, { Container } from "./styles/globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Template from "./Template";
import Login from "./pages/Login";
import Scheduling from "./pages/Scheduling";
import AllScheduling from "./pages/AllScheduling";
import { SchedulingProvider } from "./context/SchedulingItems";

function App() {
  return (
    <Container>
      <SchedulingProvider>
        <Router>
          <GlobalStyle />
          <Template>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/agendamento" element={<Scheduling />} />
              <Route path="/todos-agendamentos" element={<AllScheduling />} />
            </Routes>
          </Template>
        </Router>
      </SchedulingProvider>
    </Container>
  );
}

export default App;
