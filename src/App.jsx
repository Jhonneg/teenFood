import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Receitas from "./components/Receitas"
import Perfil from "./components/Perfil";

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
        <Route path="perfil" element={<Perfil/>}/>
      </Route>
    </Routes>
  );
}

export default App;
