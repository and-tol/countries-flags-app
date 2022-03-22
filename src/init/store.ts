import { rootReducer, AppState } from './root-reducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore, applyMiddleware, Store, Middleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createWrapper, Context } from 'next-redux-wrapper';
import axios from 'axios';

import * as api from '../config';

let store: Store | undefined;

const bindMiddleware = (middleware: Middleware[]) => {
  if (process.env.NODE_ENV !== 'production' || typeof window === 'undefined') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

/*
 const initStore = (initialState?: AppState): Store<AppState, AnyAction> => {
  return createStore(
    rootReducer,
    initialState,
    bindMiddleware([thunkMiddleware])
  );
};
*/

// export const initializeStore = (
//   preloadedState?: AppState
// ): Store<AppState, AnyAction> => {
//   let _store = store ?? initStore(preloadedState);

//   // After navigating to a page with an initial Redux state, merge that state
//   // with the current state in the store, and create a new store
//   if (preloadedState && store) {
//     _store = initStore({
//       ...store.getState(),
//       ...preloadedState,
//     });
//     // Reset the current store
//     store = undefined;
//   }

//   // For SSG and SSR always create a new store
//   if (typeof window === 'undefined') return _store;
//   // Create the store once in the client
//   if (!store) store = _store;

//   return _store;
// };

// useing Redux only in client
// export function useStore(initialState: AppState) {
//   return useMemo(() => initializeStore(initialState), [initialState]);
//   // return store;
// }

// create a makeStore function
const makeStore = (context: Context) =>
  createStore(
    rootReducer,
    bindMiddleware([thunkMiddleware.withExtraArgument({ client: axios, api })])
  );

export const wrapper = createWrapper<Store<AppState>>(makeStore);
// export const wrapper = createWrapper<Store<AppState>>(initializeStore);
