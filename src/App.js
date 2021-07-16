import React from 'react';
import Showforms from './components/Showforms';
import Addform from './components/Addform';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Addform />
<Showforms />
    </div>
  );
}

export default App;
