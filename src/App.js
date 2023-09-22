import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';


import HomePage from './pages/HomePage'; // Import the HomePage component

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <HomePage />
        </header>
      </div>
  );
}

export default App;
