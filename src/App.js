import GlobalStyle, { Container } from "./styles/globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideMenu from './components/SideMenu'
import Login from "./pages/Login";

function App() {
  return (
    <Container>
      <Router>
        <GlobalStyle />
        <SideMenu />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/agendamento" element={<Login />} />
          <Route path="/todos-agendamentos" element={<Login />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
