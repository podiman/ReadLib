import * as BookActionTypes from '../actions/BookActionTypes';

interface DefaultStateI {
    loading: boolean;
    Books?: BookActionTypes.BookType;
    categoryBooks: BookActionTypes.CategoryBooks[];
}

const defaultState: DefaultStateI = {
    loading: false,
    categoryBooks: []
};

const booksReducer = (state: DefaultStateI = defaultState, action: BookActionTypes.BookDispatchTypes) : DefaultStateI => {
    switch(action.type) {
        case BookActionTypes.BOOK_LOADING:
            console.log("Book Loading");
            return {
                ...state,
                loading: true
            }
        case BookActionTypes.BOOK_SEARCH_SUCCESS:
            console.log(`Reducer: ${action.payload.bookInfo}`);
            return {
                ...state,
                loading: false,
                Books: action.payload
            }
        case BookActionTypes.BOOK_SEARCH_FAIL:
            console.log("Book search failed");
            return {
                ...state,
                loading: false
            }
        case BookActionTypes.BOOK_CATEGORY_SUCCESS:
            if(state.categoryBooks.some(element => element.category === action.payload.category)) {
                return {
                    ...state,
                    loading: false,
                    categoryBooks: state.categoryBooks.map(item => item.category === action.payload.category ? { 
                        ...item,
                        category: action.payload.category,
                        bookList: action.payload.bookList
                    } : item)
                }
            }
            return {
                ...state,
                loading: false,
                categoryBooks: [...state.categoryBooks, action.payload]
            }
        case BookActionTypes.BOOK_CATEGORY_FAIL:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
};

export default booksReducer;
