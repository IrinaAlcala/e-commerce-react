import React from 'react';
//import { BrowserRouter, Route, Link } from "react-router-dom";
import { Link } from "react";
import './App.css';

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove('open');
  };

  return  (
   
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>&#9776</button>
          <Link to= "/">amazona</Link>

        </div>
        <div className="header-links">
          <a href="cart.html">Cart</a>
          <div className="dropdown">
          <ul className="dropdown-content">
            <li>
          <Link to="/products">Products</Link>
          </li>
          </ul>
        </div>
          )}

    </div>
      </header>

      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>
    x
        </button>
        <ul className="categories">
          <li>
            <Link to="/category/Pants">Pants</Link>
          </li>

          <li>
            <Link to="/categories/Shirts">Shirts</Link>
          </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">

          </div>
        </main>
        <footer className="footer">All rights reserved
    
        </footer>
       </div>
  );
}
        
  


        
    
  

export default App;
