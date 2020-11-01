import {ACTIONS} from '../actions';
import {put, takeLatest} from 'redux-saga/effects';
import {hideLoading, showLoading} from '../actions/LoadingActions';
import {getUsers} from '../../api/Api';

function* GET_LIST_USER() {
  yield put(showLoading());
  try {
    const response = yield getUsers();
    yield put({type: ACTIONS.SAVE_LIST_USER, users: response});
    yield put(hideLoading());
  } catch (e) {
    console.log('error', e);
    yield put(hideLoading());
  }
}

function* listUsers() {
  yield takeLatest(ACTIONS.GET_LIST_USER, GET_LIST_USER);
}

export default listUsers;
