import Home from "@/pages/Home";
import { Route, Routes } from "react-router-dom";
import { LoginForm } from "@/components/ui/login-form";
import { RegisterForm } from "@/components/ui/register-form";

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
    </Routes>
  );
};

export default Layout;
