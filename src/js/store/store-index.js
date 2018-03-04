import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/root-reducer'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

const initialState = {}
const enhancers = []
export const history = createHistory()

const middleware = [
    routerMiddleware(history),
    thunk
]


if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
);

export default store