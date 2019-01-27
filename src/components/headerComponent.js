import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

let Header = () => (
    <header>
      <nav className="navbar text-uppercase navbar-expand-md bg-info navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="/" >Marsh Hawk Music</a>
        <div className="navbar-nav">
            <a className="nav-item nav-link" href="/">Home</a>
        </div>
      </div>
      </nav>
    </header>
)

export default Header