import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
