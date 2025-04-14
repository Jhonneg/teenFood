import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

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
      </Route>
    </Routes>
  );
}

export default App;
