import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ListaProductos from './components/ListaProductos';
import Footer from './components/Footer';

function App() {

  const fecha = new Date().getFullYear();
  
  return (
    <Fragment>
      <Header titulo='packyFood' />
      
      <ListaProductos />

      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;
