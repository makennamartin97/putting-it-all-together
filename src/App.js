import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import PersonCard from './Components/PersonCard';



function App() {
  return (
    <div className="container">
      <div className="jumbotron bg-info">
        <h1 className="text-light text-center">Identification</h1>
      </div>
      <div className="card my-5">
        <div className="card-header bg-dark text-light">Person 1</div>
          <div className="card-body">
            <ul className="list-group">
              <PersonCard firstName="Makenna" lastName="Martin" age={23} hairColor="blonde" />
              
            </ul>
          </div>
      </div>
      <div className="card my-5">
        <div className="card-header bg-dark text-light">Person 2</div>
          <div className="card-body">
            <ul className="list-group">
              <PersonCard firstName="Michele" lastName="Martin" age={48} hairColor="blonde"/>
              
            </ul>
            
          </div>
      </div>
      <div className="card my-5">
        <div className="card-header bg-dark text-light">Person 3</div>
          <div className="card-body">
            <ul className="list-group">
            <PersonCard firstName="James" lastName="Franco" age={40} hairColor="brown"/>
              
            </ul>
        
          </div>
      </div>
      <div className="card my-5">
        <div className="card-header bg-dark text-light">Person 4</div>
          <div className="card-body">
            <ul className="list-group">
              <PersonCard firstName="Seth" lastName="Rogan" age={43} hairColor="brown"/>

              
            </ul>
           
          </div>
      </div>
    </div>
  );
}

export default App;
