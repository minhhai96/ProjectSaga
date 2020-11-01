import {all} from 'redux-saga/effects';
import listUsers from '../sagas/Users';

export default function* rootSaga() {
  yield all([listUsers()]);
}
