import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import { combineReducers, AnyAction, Reducer } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import DataReducer from './infoApi';

export const history = createBrowserHistory();

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  return combineReducers({
    router: connectRouter(history),
    data: DataReducer
  })(state, action);
};


const persistConfig = {
  key: 'root',
  storage
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof persistedReducer>

export interface ThunkAPI {
  state: RootState;
}