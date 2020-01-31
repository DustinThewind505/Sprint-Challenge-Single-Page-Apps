import React from "react";
import { Route } from 'react-router-dom';

import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from "./components/WelcomePage.js";


function App() {
  return (
    <main>
      
      <Header />
      <Route exact path='/' component={WelcomePage}/>
      <Route path='/characters'>
      <CharacterList />
      </Route>
    </main>
  );
}

export default App;
