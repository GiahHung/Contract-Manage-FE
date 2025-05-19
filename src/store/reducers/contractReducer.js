import actionTypes from "../actions/actionTypes";

const initialState = {
  listCustomer: [],
  listPayment: [],
  listContract: [],
  totalPage: "",
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_LIST_CUSTOMER_SUCCESS:
      return {
        ...state,
        listCustomer: action.data,
      };
    case actionTypes.FETCH_LIST_CUSTOMER_FAIL:
      return {
        ...state,
        listCustomer: [],
      };
    case actionTypes.FETCH_PAYMENT_SUCCESS:
      return {
        ...state,
        listPayment: action.data,
      };
    case actionTypes.FETCH_PAYMENT_FAIL:
      return {
        ...state,
        listPayment: [],
      };
    case actionTypes.FETCH_ALL_CONTRACT_SUCCESS:
      return {
        ...state,
        listContract: action.data,
        totalPage: action.totalPage,
      };
    case actionTypes.FETCH_ALL_CONTRACT_FAIL:
      return {
        ...state,
        listContract: [],
        totalPage: "",
      };
    default:
      return state;
  }
};

export default adminReducer;
