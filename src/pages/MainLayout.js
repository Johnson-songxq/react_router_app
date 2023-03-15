import React from "react";
import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router-dom";
import classes from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <div>
      <MainHeader />
      <main className={classes.content}>
        {/* placeholder */}
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
