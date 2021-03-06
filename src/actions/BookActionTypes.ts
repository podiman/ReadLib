export const BOOK_LOADING = "BOOK_LOADING";
export const BOOK_SEARCH_FAIL = "BOOK_SEARCH_FAILED";
export const BOOK_SEARCH_SUCCESS= "BOOK_SEARCH_SUCCESS";
export const BOOK_CATEGORY_FAIL= "BOOK_CATEGORY_FAILED";
export const BOOK_CATEGORY_SUCCESS= "BOOK_CATEGORY_SUCCESS";

export type BookType = {
    id: string;
    bookInfo: BookInfo;
    ISBNInfo: ISBNInfo[];
    imgURL?: string;
    salesInfo: SalesInfo;
}

export type BookInfo = {
    title: string;
    subtitle?: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    pageCount: number;
    averageRating: number;
    description?: string;
}

export type ISBNInfo = {
    type: string;
    identifier: string;
}

type Price = {
    amount: number;
    currency: string;
}

export type SalesInfo = {
    country: string;
    saleability: string;
    listPrice: Price;
    retailPrice: Price;
    buyLink: string;
}

export type CategoryBooks = {
    category: string;
    bookList: any[];
}

export interface BookLoading {
    type: typeof BOOK_LOADING
}

export interface BookSearchFail {
    type: typeof BOOK_SEARCH_FAIL
}

export interface BookSearchSuccess {
    type: typeof BOOK_SEARCH_SUCCESS
    payload: BookType
}

export interface SearchBookCategorySuccess {
    type: typeof BOOK_CATEGORY_SUCCESS,
    payload: CategoryBooks
}

export interface SearchBookCategoryFail {
    type: typeof BOOK_CATEGORY_FAIL
}

export type BookDispatchTypes = 
    BookLoading | 
    BookSearchFail | 
    BookSearchSuccess |
    SearchBookCategoryFail |
    SearchBookCategorySuccess

