import CreateAccountPage from './pages/CreateAccountPage';
import LoginPage from './pages/LoginPage';
import Home from "./pages/Home";
import SobreNos from "./pages/SobreNos";
import Explorar_Itens from "./pages/Explorar_Itens";
import PontosColeta from "./pages/PontosColeta";
import NotFound from './Components/NotFound';
import Produto from './pages/Produto';
import PaginaUsuario from "./pages/PaginaUsuario";
import DoarItemPage from './pages/DoarItemPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaUsuario from "./pages/PaginaUsuario";
import Siganos from './pages/Siganos';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre-nos' element={<SobreNos />} />
          <Route path='/loginpage' element={<LoginPage />} />
          <Route path='/create-account' element={<CreateAccountPage />} />
          <Route path='/pontos-coleta' element={<PontosColeta />} />
          <Route path='/explorar_itens' element={<Explorar_Itens />} />
          <Route path='/item/:id' element={<Produto />} />
          <Route path='/pagina-usuario' element={<PaginaUsuario />} />
          <Route path='/quer-doar' element={<DoarItemPage />} />
          <Route path="*" element={<NotFound />} /> {/* Rota 404 */}
          <Route path='/siga-nos' element={<Siganos />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
