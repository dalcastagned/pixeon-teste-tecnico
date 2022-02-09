import GlobalStyle, { Container } from "./styles/globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideMenu from './components/SideMenu'
import Login from "./pages/Login";
import TopBar from "./components/TopBar";
import Template from "./Template";

function App() {
  return (
    <Container>
      <Router>
        <GlobalStyle />
        <Template>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/agendamento" element={<Login />} />
          <Route path="/todos-agendamentos" element={<Login />} />
        </Routes>
        </Template>
      </Router>
    </Container>
  );
}

export default App;
