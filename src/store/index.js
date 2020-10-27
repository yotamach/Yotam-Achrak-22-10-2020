import { createStore, applyMiddleware, compose} from "redux";
import thunkMiddleware from 'redux-thunk';
import weatherReducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
        weatherReducer,
        composeEnhancers(applyMiddleware(thunkMiddleware)),
    );

export default store;