import React from 'react';
import { Switch,Route} from 'react-router-dom'
import LoginForm from './components/LoginForm';
import Showforms from './components/Showforms';
import Addform from './components/Addform';
import Header from './components/Header';
import Outform from './components/Outform';
import Demo from './components/Demo'

function App() {
  return (
    <div className="App">
       <Switch>
          <Route exact path="/">
          <LoginForm />
          </Route>
          <Route  path="/demo">
          <Demo />
          </Route>
          <Route path="/newEntry">
            <Header />
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
