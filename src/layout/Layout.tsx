import Home from "@/pages/Home";
import Login from "@/components/Login";
import Register from "@/components/Register";
import { Route, Routes } from "react-router-dom";
const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Layout;
