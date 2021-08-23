import './App.css';
import React, { Fragment } from 'react';
import Header from './components/Header';
import Board from './components/Board';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
      <Header />
      <Board />
      <Footer />
    </Fragment>
  );
}

export default App;
