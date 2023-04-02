import React from "react";
import { Outlet } from "react-router";
import SideBar from "../components/SideBar/SideBar";
const MemoizedSideBar = React.memo(SideBar);
const AdminLayout = () => {
  return (
    <>
      <Outlet />
      <SideBar />
    </>
  );
};

export default AdminLayout;
