import React from 'react';
import './App.css';
import Header from './components/Header';
import Homepage from './pages/Home/Homepage';
import Footer2 from './components/Footer2';

function App() {
  return (
    <div className="App">
	    <div className='menu-flex'>
        <Header/>
	      <Homepage/>
	    </div>
      <Footer2 className="footer-main"/>
    </div>
  );
}

export default App;
