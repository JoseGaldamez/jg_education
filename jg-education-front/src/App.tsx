import { Navigate, Route, Routes } from "react-router-dom";
import { AdminRoutes } from "./routers/AdminRoutes";
import { PublicRoutes } from "./routers/PublicRoutes";
import { RoutersApp } from "./routers/routers";

export const App = () => {
  return <RoutersApp />;
};
