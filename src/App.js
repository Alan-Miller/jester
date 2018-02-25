import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fns from './functions';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: [],
      sums: []
    }
  }

  componentDidMount() {
    fns.getProducts()
      .then(resp => {
        this.setState({ products: resp })
      });

    this.setState({ sums: fns.getSums() })
  }

  render() {
    const products = this.state.products.map((prod, i) => (
      <div key={prod.id} className="product">
        <div>{prod.title}</div>
        <div>${prod.price}</div>
      </div>
    ))
    const sums = this.state.sums.map((sum, i, a) => (
      <span key={i} className="sum">{sum}{i < a.length - 1 && ', '}</span>
    ))

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Jester sums: {sums}</h1>
          
        </header>

        <div className="App__main">
          {products}
        </div>

      </div>
    );
  }
}

export default App;
