import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./DashBoard.scss";
import { toast } from "react-toastify";
import Header from "../header/Header";
function Home() {
  // const userInfo = useSelector((state) => state.user.userInfo);
  // const navigate = useNavigate();
  // const handleNavigateToOrder = () => {
  //   navigate("/home-order");
  // };
  // const handleNavigateToSystem = () => {
  //   if (userInfo.data.roleId === "R1") {
  //     navigate("/system");
  //   } else {
  //     toast.error("You are not allowed to access this page");
  //   }
  // };
  return (
    <Fragment>
      <div><h1>aaaaaaaaaaaaaaaa</h1></div>
    </Fragment>
  );
}

export default Home;
