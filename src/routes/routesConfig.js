import Home from "../pages/home/Home";
import ServiceInfo from "../pages/serviceInfo/ServiceInfo";
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
  {
    path: "/service/id",
    element: <ServiceInfo />,
  },
];

export default routesConfig;
