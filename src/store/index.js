import { createStore, combineReducers, compose } from 'redux';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer,
});

export const store = createStore(rootReducer, composeEnhancers());
