import React from "react";
import store from "../Store";
import "./BookDetails.scss";
import Rating from "../components/Rating/Rating";
import { ReactComponent as Star } from "../icons/star.svg";

const BookDetails: React.FC = () => {
  const state = store.getState();
  console.log(state.books.Books?.bookInfo);
  const imgLink = `https://books.google.com/books/content/images/frontcover/${state.books.Books?.id}?fife=w400-h600`;
  //   const desc: string = state.books.Books?.bookInfo.description!;
  return (
    <div className="bookDetails">
      <div className="bookInformation">
        <div className="bookImage">
          <div>
            <img className="image" src={imgLink} alt="bookImage" />
            <Rating />
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
            <Rating />
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
                  console.log(isbn);
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
