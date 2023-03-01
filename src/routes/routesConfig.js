import Home from "../pages/home/Home";
import ServicePage from "../pages/services/OurServices";
const routesConfig = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/service",
    element: <ServicePage />,
  },
];

export default routesConfig;
