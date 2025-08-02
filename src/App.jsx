import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import PerfilInstitucional from './components/PerfilInstitucional.jsx';

function App() {
  return (
    <div className="layout">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<PerfilInstitucional />} />
      </Routes>
    </div>
  );
}

export default App;
