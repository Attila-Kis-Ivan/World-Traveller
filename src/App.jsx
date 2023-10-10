import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from ".//Pages/Product";
import Pricing from ".//Pages/Pricing";
import Home from ".//Pages/Home";
import ErrorPage from ".//Pages/ErrorPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
