import "./App.css";
import BarraNav from "./components/BarraNav";
import Home from "./views/Home";
import { Route, Routes } from "react-router-dom";
import Pokemones from "./views/Pokemones";
import PokeDetalles from "./views/PokeDetalles";
function App() {
  return (
    <>
      <BarraNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Pokemones/" element={<Pokemones />} />
        <Route path="Pokemones/:id" element={<PokeDetalles />} />
      </Routes>
    </>
  );
}

export default App;
