import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dash from "./pages/Dash";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/dash" element={<Dash />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
