
import './App.css';
import { Route, Routes } from "react-router-dom"

import Home from './home/Home';
import Sobre from './sobre/Sobre';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
    </Routes>
  );
}

export default App;
