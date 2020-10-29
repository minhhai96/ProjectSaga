import {ACTIONS} from './index';

export const showLoading = () => {
  return {type: ACTIONS.SHOW_LOADING};
};

export const hideLoading = () => {
  return {type: ACTIONS.HIDE_LOADING};
};
