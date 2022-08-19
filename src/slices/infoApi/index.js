import { combineReducers } from '@reduxjs/toolkit';
import dataReducers from './data';

const dataReducer = combineReducers({
  list: dataReducers
});

export default dataReducer;