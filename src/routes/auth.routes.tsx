import { Routes, Route } from "react-router-dom";
import Sign from "../pages/Sign";

const AuthRoutes = () => (
  <Routes>
    <Route path="/" element={<Sign />} />
  </Routes>
);

export default AuthRoutes;
