import {createStore, applyMiddleware} from 'redux';
//redux-logger
import thunk from 'redux-thunk';
import reducer from './Index';

const middleWare = [thunk];
export const store = createStore(reducer);
