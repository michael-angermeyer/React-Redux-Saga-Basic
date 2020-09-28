import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';

import rootReducer from "./reducers";
import rootSaga from "./sagas";

const initialState = {
    posts: {}
};

const sagaMiddleware = createSagaMiddleware();

// Apply middleware to store

export const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

export default store;