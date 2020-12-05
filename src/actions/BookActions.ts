import { Dispatch } from 'redux';
import * as BookActionTypes from './BookActionTypes';
import axios from 'axios';

const api_key = `${process.env.REACT_APP_BOOKS_API_KEY}`;

export const GetBookInformation = (book: string) => async (dispatch: Dispatch<BookActionTypes.BookDispatchTypes>) => {
    try {
        dispatch({
            type: BookActionTypes.BOOK_LOADING
        });

        const bookInformation = await axios.get(`https://www.googleapis.com/books/v1/volumes/${book}?key=${api_key}`);
        dispatch({
            type: BookActionTypes.BOOK_SEARCH_SUCCESS,
            payload: {
                id: bookInformation.data.id,
                bookInfo: {
                    authors: bookInformation.data.volumeInfo.authors,
                    averageRating: bookInformation.data.volumeInfo.averageRating,
                    pageCount: bookInformation.data.volumeInfo.pageCount,
                    publishedDate: bookInformation.data.volumeInfo.publishedDate,
                    publisher: bookInformation.data.volumeInfo.publisher,
                    subtitle: bookInformation.data.volumeInfo.subtitle,
                    title: bookInformation.data.volumeInfo.title,
                    description: bookInformation.data.volumeInfo.description
                },
                ISBNInfo: bookInformation.data.volumeInfo.industryIdentifiers,
                imgURL: bookInformation.data.volumeInfo.imageLinks.thumbnail,
                salesInfo: {
                    country: bookInformation.data.saleInfo?.country,
                    saleability: bookInformation.data.saleInfo?.saleability,
                    listPrice: {
                        amount: bookInformation.data.saleInfo?.listPrice?.amount,
                        currency: bookInformation.data.saleInfo?.listPrice?.currencyCode
                    },
                    buyLink: bookInformation.data.saleInfo?.buyLink,
                    retailPrice: {
                        amount: bookInformation.data.saleInfo?.retailPrice?.amount,
                        currency: bookInformation.data.saleInfo?.retailPrice?.currencyCode
                    },
                }
            }
        })
    } catch (e) {
        console.log(e);
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
        const res = await  axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${subject}&orderBy=newest&key=${api_key}`);
        dispatch({
            type: BookActionTypes.BOOK_CATEGORY_SUCCESS,
            payload: {
                category: subject,
                bookList: res.data.items
            }
        })
    } catch (e) {
        console.log(e);
        dispatch({
            type: BookActionTypes.BOOK_CATEGORY_FAIL
        })
    }
}