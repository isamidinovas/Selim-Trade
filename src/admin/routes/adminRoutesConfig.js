import Authentication from "../pages/authentication/Authentication";

export const  adminRoutesConfig = [
  {
    path: "/",
    element: <div>hii in main</div>,
  },
  {
    path: "/admin",
    element: <Authentication />,
  },
];
