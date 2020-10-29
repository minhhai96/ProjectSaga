import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../redux/sagas';
import reducers from '../redux/reducers';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware];

export const store = createStore(reducers, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);
