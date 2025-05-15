import actionTypes from "./actionTypes";
import { toast } from "react-toastify";
import {
  handleLogout,
  createContractService,
} from "../../services/userServices";

export const userLoginSuccess = (userInfo) => ({
  type: actionTypes.LOGIN_SUCCESS,
  userInfo: userInfo,
});

export const userLoginFail = () => ({
  type: actionTypes.LOGIN_FAIL,
});

export const processLogout = () => {
  return async (dispatch) => {
    try {
      const refreshToken = sessionStorage.getItem("refreshToken");
      if (refreshToken) {
        await handleLogout({
          refreshToken: refreshToken,
        });
      }
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      sessionStorage.removeItem("refreshToken");
      sessionStorage.removeItem("accessToken");
      dispatch({ type: actionTypes.PROCESS_LOGOUT });
    }
  };
};

export const createContract = (data) => {
  return async (dispatch, getState) => {
    try {
      const res = await createContractService(data);
      if (res && res.errCode === 0) {
        toast.success("Tạo hợp đồng thành công");
        dispatch({
          type: actionTypes.CREATE_CONTRACT_SUCCESS,
          data: res.data,
        });
      } else {
        dispatch({
          type: actionTypes.CREATE_CONTRACT_FAIL,
        });
      }
    } catch (error) {
      console.log("CREATE_CONTRACT_FAIL", error);
      dispatch({
        type: actionTypes.CREATE_CONTRACT_FAIL,
      });
    }
  };
};
