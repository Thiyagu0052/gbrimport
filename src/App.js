import React from 'react';
import { Switch,Route} from 'react-router-dom'

import Showforms from './components/Showforms';
import Addform from './components/Addform';
import Header from './components/Header';
import Outform from './components/Outform';

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
          <Route path="/outform/:id" component={Outform} ></Route>
         
        </Switch>
    </div>
  );
}

export default App;
