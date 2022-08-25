import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PublicDashboard } from "../../public/PublicDashboard";
import { PublicLogin } from "../../public/PublicLogin";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicDashboard />} />
      <Route path="/login" element={<PublicLogin />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
