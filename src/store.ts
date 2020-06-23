import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from './rootReducer';

const logger = createLogger({
  collapsed: true,
  diff: true,
})

const isDev = process.env.NODE_ENV !== 'production';

const middlewares = [];
middlewares.push(thunk);
if (isDev) {
  middlewares.push(logger);
}

const enhancer = applyMiddleware(...middlewares);

export function configureStore(initialState: any = {}) {
  return createStore(
    rootReducer,
    initialState,
    enhancer,
  );
}