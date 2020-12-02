import React from 'react';
import './App.css';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Homepage/>
      <Footer className="footer-main"/>
    </div>
  );
}

export default App;
