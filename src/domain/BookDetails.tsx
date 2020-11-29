import React from "react";
import store from "../Store";
import "./BookDetails.scss";

const BookDetails: React.FC = () => {
  const state = store.getState();
  console.log(state.books.Books?.bookInfo);
  //   const desc: string = state.books.Books?.bookInfo.description!;
  return (
    <div className="bookDetails">
      <div className="bookInformation">
        <div className="bookImage">
          <div>
            <img src={state.books.Books?.imgURL} alt="bookImage" />
            <p>My rating</p>
          </div>
        </div>
        <div className="detailedInfo">
          <p>{state.books.Books?.bookInfo.title}</p>
          <p>{state.books.Books?.bookInfo.subtitle}</p>
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
          <p>Avarage rating</p>
          <div
            dangerouslySetInnerHTML={{
              __html: state.books.Books?.bookInfo.description!,
            }}
          />
          <div className="moreInfo">
            <div className="publisherInfo">
              <p>Page Count: {state.books.Books?.bookInfo.pageCount} pages</p>
              <p>Publisher: {state.books.Books?.bookInfo.publisher}</p>
              <p>Published Date: {state.books.Books?.bookInfo.publishedDate}</p>
              <p>ISBN:</p>
            </div>
            <div className="salesInfo">
                <p>Country: </p>
                <p>Listed Price </p>
                <p>Retail Price </p>
                <p>Buy Link </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
