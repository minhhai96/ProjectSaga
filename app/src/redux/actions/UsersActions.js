import {ACTIONS} from '../actions';

export const getListUsers = () => (dispatch) => {
  dispatch({type: ACTIONS.GET_LIST_USER});
};
