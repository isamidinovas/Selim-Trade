import { Route, Routes } from "react-router";
import routesConfig from "./routes/routesConfig";
import "./App.css";
import Layout from "./routes/Layout";
import Authentication from "./admin/pages/authentication/Authentication";
import ProtectedRoute from "./admin/routes/ProtectedRoute";
import Projects from "./admin/pages/projects/Projects";
import News from "./admin/pages/news/News";
import AdminLayout from "./admin/routes/AdminLayout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          {routesConfig.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Route>
        {/* ADMIN ROUTES ⬇️ */}
        <Route path="auth" element={<Authentication />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<AdminLayout />}>
            <Route path="/admin/news" element={<News />} />
            <Route path="/admin" element={<Projects />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
