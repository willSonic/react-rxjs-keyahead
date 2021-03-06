import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { applyMiddleware, createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import { composeWithDevTools } from 'redux-devtools-extension';

import { Record } from 'immutable';

import { SongCollectionReducer, SongsterrEpics } from './songster';
import { BooksListReducer, BookEpics } from './books';

const reducers = {
  SongCollectionReducer,
  BooksListReducer,
};

const rootEpic = combineEpics(SongsterrEpics, BookEpics);

const epicMiddleware = createEpicMiddleware();

const reducerNames = Object.keys(reducers);

const stateRecordBase = reducerNames.reduce((curr, key) => {
  curr[key] = undefined;
  return curr;
}, {});

const StateRecord = Record(stateRecordBase);

const CombinedReducers = combineReducers(reducers, StateRecord);

const store = createStore(
  CombinedReducers,
  composeWithDevTools(applyMiddleware(epicMiddleware)),
);

epicMiddleware.run(rootEpic);

export default store;
