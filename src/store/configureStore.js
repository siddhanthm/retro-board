import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import authReducer from './../reducers/auth';

import thunk from 'redux-thunk';
import { auth } from 'firebase';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    // Store Creation
    const store = createStore(
        combineReducers({
            auth: authReducer,
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};
