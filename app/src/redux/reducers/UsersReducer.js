import {ACTIONS} from '../actions';

export const initState = {
  users: [],
};

export const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS.SAVE_LIST_USER:
      return {
        ...state,
        users: action.users,
      };
    default:
      return state;
  }
};
