import React, { Fragment } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../containers/header/Header";
import Profile from "../containers/header/Profile";
import { useSelector } from "react-redux";
function System() {
  const userInfo = useSelector((state) => state.user.userInfo);
  return (
    <Fragment>
      <div className="flex ">
        <div className="w-56"> 
          <Header />
        </div>
        <div className="flex-1">
          <Profile/>
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
}

export default System;
