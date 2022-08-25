import { Route, Routes } from "react-router-dom";
import { AdminLogin } from "../../admin/AdminLogin";

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLogin />} />
    </Routes>
  );
};
