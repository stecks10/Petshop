import React from 'react';
import './assets/css/base/base.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import Pagina404 from './paginas/Pagina404';

function App() {
  return (
    <>
      <Home />
      <Sobre />
      <Pagina404 />
    </>
  );
}

export default App;
