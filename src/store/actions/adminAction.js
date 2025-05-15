import actionTypes from "./actionTypes";
import {

} from "../../services/adminServices";

// export const fetchCategoryId = () => {
//   return async (dispatch, getState) => {
//     try {
//       let res = await handleGetAllCodeService("CATEGORY");
//       if (res && res.errCode === 0) {
//         dispatch({
//           type: actionTypes.FETCH_CATEGORY_SUCCESS,
//           data: res.data,
//         });
//       } else {
//         dispatch({
//           type: actionTypes.FETCH_CATEGORY_FAIL,
//         });
//       }
//     } catch (e) {
//       console.log("FETCH_CATEGORY_FAIL: ", e);
//       dispatch({
//         type: actionTypes.FETCH_CATEGORY_FAIL,
//       });
//     }
//   };
// };


