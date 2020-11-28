import { applyMiddleware, compose, createStore } from "redux";
import RootReducer from './reducers/RootReducer';
import thunk from 'redux-thunk';

const Store = createStore(RootReducer, compose(applyMiddleware(thunk)));

export type RootStore = ReturnType<typeof RootReducer>

export default Store;