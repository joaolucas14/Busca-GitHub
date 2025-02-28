import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import PaginaPadrao from "./routes/PaginaPadrao";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
