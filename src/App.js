//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './component/Header/Header';
import Shop from './component/Header/Shop';
// import Product from './component/Header/Products/Product';
function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
      {/* /<Product></Product> */}
    </div>
  );
}

export default App;
