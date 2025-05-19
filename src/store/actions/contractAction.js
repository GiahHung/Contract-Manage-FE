import actionTypes from "./actionTypes";
import {
  handleGetListCustomerService,
  handleGetPaymentService,
  handleGetAllContractService,
} from "../../services/ContractServices";

export const fetchPayment = () => {
  return async (dispatch, getState) => {
    try {
      let res = await handleGetPaymentService();
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_PAYMENT_SUCCESS,
          data: res.data,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_PAYMENT_FAIL,
        });
      }
    } catch (e) {
      console.log("FETCH_PAYMENT_FAIL: ", e);
      dispatch({
        type: actionTypes.FETCH_PAYMENT_FAIL,
      });
    }
  };
};

export const fetchListCustomer = () => {
  return async (dispatch, getState) => {
    try {
      let res = await handleGetListCustomerService();
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_LIST_CUSTOMER_SUCCESS,
          data: res.data,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_LIST_CUSTOMER_FAIL,
        });
      }
    } catch (e) {
      console.log("FETCH_LIST_CUSTOMER_FAIL: ", e);
      dispatch({
        type: actionTypes.FETCH_LIST_CUSTOMER_FAIL,
      });
    }
  };
};

export const fetchListContract = (page,limit,sortField,sortOrder) => {
  return async (dispatch, getState) => {
    try {
      let res = await handleGetAllContractService(
        page,
        limit,
        sortField,
        sortOrder
      );
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_ALL_CONTRACT_SUCCESS,
          data: res.data,
          totalPage: res.totalPages,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_ALL_CONTRACT_FAIL,
        });
      }
    } catch (e) {
      console.log("FETCH_ALL_CONTRACT_FAIL: ", e);
      dispatch({
        type: actionTypes.FETCH_ALL_CONTRACT_FAIL,
      });
    }
  };
};