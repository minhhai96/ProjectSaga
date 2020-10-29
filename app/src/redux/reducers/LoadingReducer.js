import {ACTIONS} from '../actions';

export const initState = {
  loading: false,
};

export const loadingReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS.SHOW_LOADING:
      return {...state, loading: true};
    case ACTIONS.HIDE_LOADING:
      return {...state, loading: false};
    default:
      return state;
  }
};
