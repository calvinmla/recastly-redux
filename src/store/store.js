import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

let initialState = {
  videoList: [],
  currentVideo: null
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
