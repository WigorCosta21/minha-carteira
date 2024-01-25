import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";
import List from "../pages/List";

const AppRoutes = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/list/:type" element={<List />} />
    </Routes>
  </Layout>
);

export default AppRoutes;
