import React from "react";
import LandingPage from "./domain/LandingPage";
import About from "./domain/About";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route } from "react-router-dom";
import "./sass/base.scss";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import { useSelector } from "react-redux";
import { RootStore } from "./Store";
import BookDetails from "./domain/BookDetails";
import BookCategory from "./domain/BookCategory";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Crimson Text",
  },
  palette: {
    primary: {
      main: '#a78f69',
      dark: '#524743'
    },
    secondary: {
      main: '#524743'
    },
    success: {
      main: '#67a558'
    },
    warning: {
      main: '#e59520'
    },
    error: {
      main: '#f44336'
    }
  }
});

function App() {
  const bookState = useSelector((state: RootStore) => state.books);

  console.log("Book state:", bookState);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ScrollTop />
        <div className="App">
          <NavBar />
          <Route exact={true} path="/" component={LandingPage} />
          <Route exact={true} path="/about" component={About} />
          <Route exact={true} path="/book/:bookId" component={BookDetails} />
          <Route
            exact={true}
            path="/category/:categoryId"
            component={BookCategory}
          />
          <Footer />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
