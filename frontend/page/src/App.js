
import './App.css';
import { Route, Routes } from "react-router-dom"

import Home from './home/Home';
import Sobre from './sobre/Sobre';
import Login from './login/Login';
import ProdutoSingle from './produto_single/ProdutoSingle';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/login" element={<Login />} />
      <Route path="/produto/:id" element={<ProdutoSingle />} />
    </Routes>
  );
}

export default App;
