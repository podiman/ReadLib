import { combineReducers } from "redux";
import booksReducer from './BooksReducer';

const RootReducer = combineReducers({
    books: booksReducer
});

export default RootReducer;