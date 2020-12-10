import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import store from "../Store";
import { useDispatch } from "react-redux";
import { GetBookInformation } from "../actions/BookActions";
import { RouteComponentProps } from "react-router-dom";
import { BooksOfSubject } from "../actions/BookActions";
import "./BookCategory.scss";
import { CategoryBooks } from "../actions/BookActionTypes";

const BookCategory: React.FC<RouteComponentProps<{ categoryId: string }>> = ({
  match,
}) => {
  const state = store.getState();
  const dispatch = useDispatch();

  const { params } = match;
  const { categoryId } = params;
  useEffect(() => {
    dispatch(BooksOfSubject(categoryId));
  }, [match.params.categoryId]);
  const BooksOfThisCategory: CategoryBooks = state.books.categoryBooks.find(
    (element) => element.category === categoryId
  )!;
  const getBookInfo = (bookId: string) => {
    dispatch(GetBookInformation(bookId));
  };

  return (
    <>
      {/* {!state.books.loading && (
        <div className="page">
          <div className="pageBody">
            <div className="categoryContent">
              <div>
                <h1 className="title">{BooksOfThisCategory?.category} Books</h1>
                {BooksOfThisCategory?.bookList.map((book) => {
                  const imgurl = `https://books.google.com/books/content/images/frontcover/${book.id}?fife=w400-h600`;
                  const bookId = book.id;
                  const path = `/book/${book.id}`;
                  return (
                    <Link
                      key={bookId}
                      to={path}
                      onClick={() => getBookInfo(bookId)}
                    >
                      <img className="bookCover" src={imgurl} alt={bookId} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )} */}
      <div className="page">
          <div className="pageBody">
            <div className="categoryContent">
              <div>
                <h1 className="title">{BooksOfThisCategory?.category} Books</h1>
                {BooksOfThisCategory?.bookList.map((book) => {
                  const imgurl = `https://books.google.com/books/content/images/frontcover/${book.id}?fife=w400-h600`;
                  const bookId = book.id;
                  const path = `/book/${book.id}`;
                  return (
                    <Link
                      key={bookId}
                      to={path}
                      onClick={() => getBookInfo(bookId)}
                    >
                      <img className="bookCover" src={imgurl} alt={bookId} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default BookCategory;
