import Home from "../pages/home/Home";
import ServiceInfo from "../pages/serviceInfo/ServiceInfo";
import ServicePage from "../pages/services/OurServices";
import Works from "../pages/works/Works";
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
    path: "/service/:id",
    element: <ServiceInfo />,
  },
  {
    path: "/works",
    element: <Works />,
  },
];

export default routesConfig;
