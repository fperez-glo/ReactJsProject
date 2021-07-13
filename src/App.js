import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar'
import "bootstrap/dist/css/bootstrap.css";
import ItemListContainer from './components/ItemListContainer';


function App() {


  return (
    <div className="App">
      <NavBar className="NavBar"/>
      <header className="App-header">
      
      </header>
      <body className="App-body">
        <ItemListContainer/>
      </body>
    </div>
  );
}

export default App;
