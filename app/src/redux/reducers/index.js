import {combineReducers} from 'redux';
import {loadingReducer} from './LoadingReducer';

export default combineReducers({
  loadingState: loadingReducer,
});
