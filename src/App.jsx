import React from 'react';
import './index.css';
import Header from './componets/Header/Header';
import Main from './componets/Main/Main';
import Experience from './componets/Experience/Experience';
import Search from './componets/Search/Search';
import { useState } from 'react';
import { Routes, Route, Router, Link } from 'react-router-dom';

import { ModalProvider } from './contexts/ModalContext/ModalProvider';

function App() {
  return (
    <ModalProvider>
      <div>
        <Header />
        <Main />
        <Experience />
        <Search />
      </div>
    </ModalProvider>
  );
}

export default App;
