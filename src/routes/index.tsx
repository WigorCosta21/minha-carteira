import { BrowserRouter } from "react-router-dom";

import { useAuth } from "../hooks/auth";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

const Routes = () => {
  const { logged } = useAuth();

  return (
    <BrowserRouter>{logged ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
  );
};

export default Routes;
