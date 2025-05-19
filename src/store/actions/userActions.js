import actionTypes from "./actionTypes";
import { toast } from "react-toastify";
import {
  handleLogout,
  createContractService,
  handleGetRoleService,
  handleGetAllCustomerWithPageService,
  handleGetAllUserWithPageService
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

export const fetchRole = () => {
  return async (dispatch, getState) => {
    try {
      const res = await handleGetRoleService();
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_ROLE_SUCCESS,
          data: res.data,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_ROLE_FAIL,
        });
      }
    } catch (error) {
      console.log("FETCH_ROLE_FAIL", error);
      dispatch({
        type: actionTypes.FETCH_ROLE_FAIL,
      });
    }
  };
};

export const fetchAllCustomerPage = (page,limit,sortField,sortOrder) => {
  return async (dispatch, getState) => {
    try {
      const res = await handleGetAllCustomerWithPageService(
        page,
        limit,
        sortField,
        sortOrder
      );
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_CUSTOMER_PAGE_SUCCESS,
          data: res.data,
          totalPage: res.totalPages,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_CUSTOMER_PAGE_FAIL,
        });
      }
    } catch (error) {
      console.log("FETCH_CUSTOMER_PAGE_FAIL", error);
      dispatch({
        type: actionTypes.FETCH_CUSTOMER_PAGE_FAIL,
      });
    }
  };
};

export const fetchAllUserPage = (page, limit, sortField, sortOrder) => {
  return async (dispatch, getState) => {
    try {
      const res = await handleGetAllUserWithPageService(
        page,
        limit,
        sortField,
        sortOrder
      );
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_LIST_USER_SUCCESS,
          data: res.data,
          totalPage: res.totalPages,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_LIST_USER_FAIL,
        });
      }
    } catch (error) {
      console.log("FETCH_LIST_USER_FAIL", error);
      dispatch({
        type: actionTypes.FETCH_LIST_USER_FAIL,
      });
    }
  };
};