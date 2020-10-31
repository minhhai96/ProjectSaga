import {combineReducers} from 'redux';
import {loadingReducer} from './LoadingReducer';
import {usersReducer} from './UsersReducer';

export default combineReducers({
  loadingState: loadingReducer,
  usersState: usersReducer,
});
