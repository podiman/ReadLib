import React, { useState } from "react";
import LandingPage from "./domain/LandingPage";
import About from "./domain/About";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route } from "react-router-dom";
import "./sass/base.scss";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import { useDispatch, useSelector } from "react-redux";
import { GetBooks, BooksOfSubject } from "./actions/BookActions";
import { RootStore } from "./Store";

function App() {
  const dispatch = useDispatch();
  const [bookName, setbookName] = useState("");
  const bookState = useSelector((state: RootStore) => state.books);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setbookName(event.target.value);
  const handleSubmit = () => dispatch(BooksOfSubject(bookName));

  console.log("Book state:", bookState);
  return (
      <BrowserRouter>
        <ScrollTop />
        <div className="App">
          <NavBar />
          <input type="text" onChange={handleChange} />
          <button onClick={handleSubmit}>Search</button>
          <Route exact={true} path="/" component={LandingPage} />
          <Route exact={true} path="/about" component={About} />
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
