import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import movieBrowserReducer from './modules/movie-browser/movie-browser.reducers'

const rootReducer = combineReducers({
    movieBrowser: movieBrowserReducer
});

const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    undefined,
    compose(applyMiddleware(thunkMiddleware, loggerMiddleware))
);

export default store;