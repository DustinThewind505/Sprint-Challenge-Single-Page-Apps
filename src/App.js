import React from "react";
import { Route } from 'react-router-dom';

import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import LocationList from "./components/LocationsList";
import EpisodeList from './components/EpisodeList'
import WelcomePage from "./components/WelcomePage.js";
import LocationsList from "./components/LocationsList";


function App() {
  return (
    <main>
      
      <Header />
      <Route exact path='/' component={WelcomePage}/>
      <Route path='/characters'>
      <CharacterList />
      </Route>
      <Route path='/locations' component={LocationsList}/>
      <Route path='/episodes' component={EpisodeList}/>
    </main>
  );
}

export default App;
