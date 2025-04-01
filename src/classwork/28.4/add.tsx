import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Protect } from "./protect";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Protect />}>
          <Route path="/bake" element={<Bake />}></Route>
          <Route path="/kaisar" element={<Kaisar />}></Route>
        </Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <p>Home </p>
    </div>
  );
}

function Bake() {
  return (
    <div>
      <p>bake </p>
    </div>
  );
}

function Kaisar() {
  return (
    <div>
      <p>kaisar </p>
    </div>
  );
}
