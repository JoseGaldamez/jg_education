import { useState } from "react";
import { AdminRoutes } from "./AdminRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const RoutersApp = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  if (isAdmin) {
    return <AdminRoutes />;
  }

  return <PublicRoutes />;
};
