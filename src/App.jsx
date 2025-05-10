import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Receitas from "./components/Receitas";
import Perfil from "./components/Perfil";
import Grafico from "./components/Grafico";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Footer />
          </>
        }
      >
        <Route index element={<Home />} />
        <Route path="receitas" element={<Receitas />} />
        <Route path="perfil" element={<Perfil />} />
        <Route path="grafico" element={<Grafico />} />
      </Route>
    </Routes>
  );
}

export default App;
