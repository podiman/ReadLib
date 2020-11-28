import { Dispatch } from 'redux';
import * as BookActionTypes from './BookActionTypes';
import axios from 'axios';

const api_key = `${process.env.REACT_APP_BOOKS_API_KEY}`;
const volumeId = "zyTCAlFPjgYC";

export const GetBooks = (book: string) => async (dispatch: Dispatch<BookActionTypes.BookDispatchTypes>) => {
    try {
        dispatch({
            type: BookActionTypes.BOOK_LOADING
        });

        // const res = await  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}+inauthor:keyes&key=${api_key}`);
        const getOneBook = await axios.get(`https://www.googleapis.com/books/v1/volumes/${volumeId}?key=${api_key}`);

        dispatch({
            type: BookActionTypes.BOOK_SEARCH_SUCCESS,
            payload: {
                id: getOneBook.data.id,
                bookInfo: {
                    authors: getOneBook.data.volumeInfo.authors,
                    averageRating: getOneBook.data.volumeInfo.averageRating,
                    pageCount: getOneBook.data.volumeInfo.pageCount,
                    publishedDate: getOneBook.data.volumeInfo.publishedDate,
                    publisher: getOneBook.data.volumeInfo.publisher,
                    subtitle: getOneBook.data.volumeInfo.subtitle,
                    title: getOneBook.data.volumeInfo.title
                },
                ISBNInfo: [getOneBook.data.volumeInfo.industryIdentifiers],
                imgURL: getOneBook.data.volumeInfo.imageLinks.thumbnail
            }
        })
    } catch (e) {
        dispatch({
            type: BookActionTypes.BOOK_SEARCH_FAIL
        })
    };
};

export const BooksOfSubject = (subject: string) => async (dispatch: Dispatch<BookActionTypes.BookDispatchTypes>) => {
    try {
        dispatch({
            type: BookActionTypes.BOOK_LOADING
        });
        const res = await  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${subject}:romance&orderBy=newest&key=${api_key}`);
        dispatch({
            type: BookActionTypes.BOOK_CATEGORY_SUCCESS,
            payload: {
                category: subject,
                bookList: res.data.items
            }
        })
    } catch (e) {
        dispatch({
            type: BookActionTypes.BOOK_CATEGORY_FAIL
        })
    }
}