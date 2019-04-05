import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';

let Header = () => (
    <header className="site-header">
      <nav className="site-nav family-sans navbar text-uppercase navbar-expand-md bg-info navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="/" >
          <i className="fa fa-music"></i> Marsh Hawk Music</a>
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="/">Home</a>
        </div>
      </div>
      </nav>
    </header>
)

export default Header