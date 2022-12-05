import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./home/Home";
import Sobre from "./sobre/Sobre";
import Usuario from "./usuario/Usuario";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="sobre" element={<Sobre />} />
      <Route path="usuario" element={<Usuario />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);