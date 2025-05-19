import actionTypes from "../actions/actionTypes";

const initialState = {
  isLoggedIn: false,
  userInfo: null,
  arrRole: [],
  arrUser: [],
  arrCustomer: [],
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        userInfo: action.userInfo,
      };

    case actionTypes.LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        userInfo: null,
      };
    case actionTypes.PROCESS_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        userInfo: null,
      };
    case actionTypes.FETCH_ROLE_SUCCESS:
      return {
        ...state,
        arrRole: action.data,
      };

    case actionTypes.FETCH_ROLE_FAIL:
      return {
        ...state,
        arrRole: [],
      };
    case actionTypes.FETCH_LIST_USER_SUCCESS:
      return {
        ...state,
        arrUser: action.data,
      };

    case actionTypes.FETCH_LIST_USER_FAIL:
      return {
        ...state,
        arrUser: [],
      };
    case actionTypes.FETCH_CUSTOMER_PAGE_SUCCESS:
      return {
        ...state,
        arrCustomer: action.data,
      };

    case actionTypes.FETCH_CUSTOMER_PAGE_FAIL:
      return {
        ...state,
        arrCustomer: [],
      };
    default:
      return state;
  }
};

export default userReducer;
