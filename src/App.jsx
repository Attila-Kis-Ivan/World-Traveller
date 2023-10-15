import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from ".//Pages/Product";
import Pricing from ".//Pages/Pricing";
import PageNotFound from ".//Pages/PageNotFound";
import AppLayout from "./Pages/AppLayout";
import Homepage from "./Pages/HomePage";
import Login from "./Pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<p>List of cities</p>} />
          <Route path="cities" element={<p>List of cities</p>} />
          <Route path="countries" element={<p>Countries</p>} />
          <Route path="form" element={<p>Form</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
