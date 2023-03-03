import Home from "../pages/home/Home";
import News from "../pages/news/News";
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
  {
    path: "/news",
    element: <News />,
  },
];

export default routesConfig;
