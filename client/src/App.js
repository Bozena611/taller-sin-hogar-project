import React from 'react';
import './App.css';
import Header from './components/Header';
import Homepage from './pages/Home/Homepage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
	    <div className='menu-flex'>
        <Header/>
	      <Homepage/>
	    </div>
      <Footer className="footer-main"/>
    </div>
  );
}

export default App;
