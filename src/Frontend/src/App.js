import Home from "./pages/Home";
import SobreNos from "./pages/SobreNos";
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PontosColeta from "./pages/PontosColeta";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/sobre-nos' element={<SobreNos/>} />
          <Route path='/loginpage' element={<LoginPage />} />
          <Route path='/create-account' element={<CreateAccountPage />} /> {/* Nova rota para CreateAccountPage */}
          <Route path='/pontos-coleta' element={<PontosColeta />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
