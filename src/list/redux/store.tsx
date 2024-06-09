import { createStore } from "redux";
// import thunk from "redux-thunk";
import { applyMiddleware, compose } from "redux";
import { Userdata } from "../Pages/userdata";
export interface RootState {
  Userdata: any[];
}
const intialstate: RootState = {
  Userdata: [],
};
// MIDDLEWARE
// const middleware = [thunk];

// const composeEnhancers =
//   process.env.REACT_APP_ENABLE_REDUX === "true"
//     ? compose(
//         applyMiddleware(...middleware),
//         (window as any).__REDUX_DEVTOOLS_EXTENSION__
//           ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
//           : (f: any) => f as any
//       )
//     : compose(applyMiddleware(...middleware));
export const USERDATA = "USER_DATA";
export const REMOVEUSER = "REMOVE_USER";
//Reducer
const reducer = (state: RootState = intialstate, action: any) => {
  switch (action.type) {
    case USERDATA:
      return {
        ...state,
        // Userdata: action.payload,
        Userdata: [...state.Userdata, action.payload],
        // Userdata: state.Userdata.concat(action.payload),
        // selectedAgent: [...state.selectedAgent, action.payload],
      };
    case REMOVEUSER:
      const { id } = action.payload || {};
      return {
        ...state,
        // Userdata: state.Userdata.filter((detail) => detail !== action.payload),
        Userdata: state.Userdata.filter((detail) => detail.id !== id),
      };

    default:
      return state;
  }
};
// Create Redux store
const UserdetailsStore = createStore(reducer);
export default UserdetailsStore;
