import { Route, Routes } from "react-router";
import Navbar from "./components/navbar";
import Home from "./components/home";

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
