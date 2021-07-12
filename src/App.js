import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar'
import "bootstrap/dist/css/bootstrap.css";
import ItemListContainer from './components/ItemListContainer';


function App() {


  return (
    <div className="App">
      <header className="App-header">
        <NavBar className="NavBar"/>
        <ItemListContainer/>
        
      </header>
    </div>
  );
}

export default App;
