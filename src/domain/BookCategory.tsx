import React from "react";
import booksReducer from "../reducers/BooksReducer";
import { Link } from "react-router-dom";
import store from "../Store";
import { useDispatch } from "react-redux";
import { GetBookInformation } from "../actions/BookActions";
import "./BookCategory.scss";

const BookCategory: React.FC = () => {
  const state = store.getState();
  const dispatch = useDispatch();

  const getBookInfo = (bookId: string) => {
    dispatch(GetBookInformation(bookId));
  };

  return (
    <div className="page">
      <div className="pageBody">
        <div className="categoryContent">
          {state.books.categoryBooks.map((category) => {
            return (
              <div>
                <h1 className="title">{category.category} Books</h1>
                {category.bookList.map((book) => {
                  const imgurl = `https://books.google.com/books/content/images/frontcover/${book.id}?fife=w400-h600`;
                  const bookId = book.id;
                  const path = `/book/${book.id}`;
                  return (
                    <Link to={path} onClick={() => getBookInfo(bookId)}>
                      <img className="bookCover" src={imgurl} alt={bookId} />
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BookCategory;
