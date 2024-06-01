import {  Route, Routes } from "react-router-dom";
import "./App.css";
import ProductListingPage from "./pages/productListingPage";
import ProductPage from "./pages/productPage";

function App() {
  return (
      <Routes>
        <Route path="/products/:productId" element={<ProductPage />} />
        <Route path="/products/" element={<ProductListingPage />} />
      </Routes>
  );
}

export default App;
