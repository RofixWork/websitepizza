import React from 'react';
import Header from './components/Header';
import About from './components/About';
import './styles/App.scss'
import Shop from './components/Shop';
import Menu from './components/Menu';
import Client from './components/Client';
import Price from './components/Price';
function App() {
  return (
    <>
      <Header/>
      <About/>
      <Shop/>
      <Menu/>
      <Client/>
      <Price/>
    </>
  );
}

export default App;
