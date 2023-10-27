import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navigationbar from "./Navigationbar";

function App() {
  return (
    <Routes>
      <Route element={<Navigationbar />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
