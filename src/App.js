import React from 'react';
import { Switch,Route} from 'react-router-dom'

import Showforms from './components/Showforms';
import Addform from './components/Addform';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
       <Switch>
          <Route exact path="/">
          <Header/>
          <Addform />
          </Route>
          <Route path="/entries">
          <Header/>
          <Showforms />
          </Route>
         
        </Switch>
    </div>
  );
}

export default App;
