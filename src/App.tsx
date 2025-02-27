import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import PaginaPadrao from "./routes/PaginaPadrao";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
