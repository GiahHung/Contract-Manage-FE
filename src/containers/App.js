import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { path } from "../utils/constant";
import Login from "./Auth/Login";
import DashBoard from "../containers/Homepage/DashBoard";
import Home from "../routes/Home";
class App extends Component {
  render() {
    const { systemMenuPath, isLoggedIn, userInfo } = this.props;
    const roleId = userInfo?.data?.roleId; // Lấy roleId từ Redux

    return (
      <Fragment>
        <BrowserRouter>
          <div className="main-container">
            <span className="content-container">
              <Routes>
                <Route path={path.LOGIN} element={<Login />} />

                <Route path="/home/*" element={<Home />}>
                  <Route path="dash-board" element={<DashBoard />} />

                  <Route path="*" element={<Navigate to={systemMenuPath} />} />
                </Route>
              </Routes>
              {/* {isLoggedIn && (
                  <>
                    <Route path={path.HOMEPAGE} element={<Home />} />
                  </>
                )}

            
                <Route
                  path="*"
                  element={
                    <Navigate to={isLoggedIn ? systemMenuPath : path.LOGIN} />
                  }
                /> */}
            </span>

            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </div>
        </BrowserRouter>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    systemMenuPath: state.app.systemMenuPath,
    isLoggedIn: state.user.isLoggedIn,
    userInfo: state.user.userInfo, // Lấy userInfo từ Redux
  };
};

export default connect(mapStateToProps)(App);
