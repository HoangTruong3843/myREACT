import React from 'react';
import './App.css';
import MovieHeader from './components/movieheader';
import MovieList from './components/movielist';
import Movie from './components/movie';
import Authentication from './components/authentication';
import {HashRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './stores/store';
//new!!
import Header from './Header.js';
import DatingCards from './DatingCards.js';
import SwipeButtons from './SwipeButtons';



function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HashRouter>
          <div>
            <MovieHeader />
            <Route exact path="/" render={()=><MovieList />}/>
            <Route exact path="/movielist" render={()=><MovieList />}/>
            <Route exact path="/movie/:movieId" render={()=><Movie />}/>
            <Route path="/signin" render={()=><Authentication />}/>

            //new here
            <Header />
            <DatingCards />
            <SwipeButtons />
            //end new


          </div>
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
