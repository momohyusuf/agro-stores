import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Marketplace from "./pages/Markeplace";
import Cart from "./pages/Cart";
import MainLayout from "./layout/MainLayout";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="marketplace">
          <Route index element={<Marketplace />} />
          <Route path=":productId" element={<ProductDetails />} />
        </Route>

        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
