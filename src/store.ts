import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { persistedReducer, history } from './slices/rootReducer';
import { routerMiddleware } from 'connected-react-router';
import { persistStore } from 'redux-persist';


const preloadedState = {};

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(routerMiddleware(history)),
  preloadedState
})

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
