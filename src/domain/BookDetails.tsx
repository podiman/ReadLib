import React from "react";
import store from "../Store";
import "./BookDetails.scss";
import Rating from '@material-ui/lab/Rating';
import {withRouter, RouteComponentProps} from 'react-router-dom';


const BookDetails: React.FC<RouteComponentProps<{bookId: string}>> = ({match}) => {
  const state = store.getState();

  const {params} = match;
  const {bookId} = params;
  const imgLink = `https://books.google.com/books/content/images/frontcover/${bookId}?fife=w400-h600`;

  return (
    <div className="page">
      <div className="pageBody">
        <div className="bookImage">
          <div>
            <img className="image" src={imgLink} alt="bookImage" />
            <Rating name="half-rating" size="large" color="#a78f69" defaultValue={2.5} precision={0.5} />
            <p>My rating</p>
          </div>
        </div>
        <div className="detailedInfo">
          <h1 className="bookTitle">{state.books.Books?.bookInfo.title}</h1>
          <h2 className="bookSubtitle">
            {state.books.Books?.bookInfo.subtitle}
          </h2>
          <div className="authors">
            <span>by&nbsp;</span>
            {state.books.Books?.bookInfo.authors.map((author) => {
              return (
                <p>
                  {author}
                  <span>,&nbsp;</span>
                </p>
              );
            })}
          </div>
          <div className="avgRating">
          <Rating name="read-only" size="large"  value={state.books.Books?.bookInfo.averageRating} precision={0.5} readOnly />
          <p>Avarage rating</p>
          </div>
          <div
            className="description"
            dangerouslySetInnerHTML={{
              __html: state.books.Books?.bookInfo.description!,
            }}
          />
          <div className="moreInfo">
            <div className="publisherInfo">
              <p>Page Count: {state.books.Books?.bookInfo.pageCount} pages</p>
              <p>Publisher: {state.books.Books?.bookInfo.publisher}</p>
              <p>Published Date: {state.books.Books?.bookInfo.publishedDate}</p>
              <div className="ISBN">
                ISBN:<span>&nbsp;&nbsp;</span>
                {state.books.Books?.ISBNInfo.map((isbn) => {
                  return (
                    <p>
                      {isbn.identifier}
                      <span>,&nbsp;</span>
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="salesInfo">
              <p>Country: {state.books.Books?.salesInfo.country}</p>
              <p>
                Listed Price: {state.books.Books?.salesInfo.listPrice.amount}{" "}
                {state.books.Books?.salesInfo.listPrice.currency}
              </p>
              <p>
                Retail Price: {state.books.Books?.salesInfo.retailPrice.amount}{" "}
                {state.books.Books?.salesInfo.retailPrice.currency}
              </p>
              <p>Buy Link </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
