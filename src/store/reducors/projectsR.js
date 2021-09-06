import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../action/projectA";

const reducor = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      console.log(action);
      return action.payload;
    case CREATE:
      return [...state, action.payload];
    case UPDATE:
      return state.map((project) =>
        state._id === action.payload._id ? action.payload : project
      );
    case DELETE:
      return state.filter((project) => project._id !== action.payload);
    default:
      return state;
  }
};

export default reducor;
