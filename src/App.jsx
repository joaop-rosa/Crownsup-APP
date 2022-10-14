import { Routes, Route } from "react-router-dom";
import { Login, Register } from "./UI/screens";
import './assets/styles/base/reset.css'
import './assets/styles/base/variables.css'
import './assets/styles/global/global.css'


function App() {
  return (
    <Routes>
      <Route path="/" element={
        <Login />
      }>
      </Route>
      <Route path="/register" element={
        <Register />
      }>
      </Route>
    </Routes>
  );
}

export default App;
