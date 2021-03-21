import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/nav";
import Home from "./components/home";
import Footer from "./components/footer";
import MovieDetail from "./components/movieDetail";
import PageNotFound from "./components/pageNotFound";
import About from "./components/about";
import MyFavourites from "./components/myFavourites";
import MyRated from "./components/myRated";
import Discover from "./components/discover";

function App() {
  return (
    <div className='App'>
      <Router>
        <div className='wrapper'>
          <Nav />
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route
              path='/detail/:poster/:id/:title/:releaseDate/:rating/:summary'
              component={MovieDetail}
            />
            <Route path='/discover'>
              <Discover />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/myfavourites'>
              <MyFavourites />
            </Route>
            <Route path='/myrated'>
              <MyRated />
            </Route>
            <Route>
              <PageNotFound />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
