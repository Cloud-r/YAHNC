import { combineReducers } from 'redux';

import PageReducer from './pageReducer';

import TabReducer from './tabReducer';

const combinedReducers = combineReducers({ page: PageReducer, tab: TabReducer });

export default combinedReducers;
