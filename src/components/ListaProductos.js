import React, { Component, Fragment } from 'react';
import Producto from './Producto';

class ListaProductos extends Component {
  state = {
    productos: [
      { id: 1, name: 'Restaurante 1', precio: 10000 },
      { id: 2, name: 'Restaurante 2', precio: 15000 },
      { id: 3, name: 'Restaurante 3', precio: 8000 },
      { id: 4, name: 'Restaurante 4', precio: 20000 },
    ],
  };
//métodos de React
  componentDidMount() {
      console.log(1)
  }
  componentWillMount() {
    console.log(2)
  }
  componentWillUpdate() {
    console.log(3)
  }
  componentWillUnmount() {
    console.log(4)
  }
//métodos creados

  render() {
    console.log(5)
    const { productos } = this.state;

    return (        
      <Fragment>
        <h1>Lista de productos</h1>
        {productos.map((producto) => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </Fragment>
    );
  }
}
export default ListaProductos;
