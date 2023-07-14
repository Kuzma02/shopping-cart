import { Routes, Route } from "react-router-dom";
import { Home, Cart } from "../pages";
import { Header } from "../components";

export const AllRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};
