import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from './App';
import Favorites from './Favorites';
import Lists from './Lists';
import Recent from './Recent';

function toggleNav(){
    let nav = document.getElementById('nav');
    nav.classList.contains('active')?nav.classList.remove('active') : nav.classList.add('active');
    document.getElementById('menu').parentElement.classList.contains("active")?document.getElementById('menu').classList.add("change"):document.getElementById('menu').classList.remove("change");
}

function Nav() {
  return (
    <Router>
      <div>
        
        <nav id="nav" className="side_nav">
            <div id="menu" onClick={toggleNav}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            <ul id="menu_list-item">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/favorites/">Favorites</Link>
                </li>
                <li>
                    <Link to="/lists/">Lists</Link>
                </li>
                <li>
                    <Link to="/recent/">Recent</Link>
                </li>
            </ul>
        </nav>

        <Route path="/" exact component={App} />
        <Route path="/favorites/" component={Favorites} />
        <Route path="/lists/" component={Lists} />
        <Route path="/recent/" component={Recent} />
      </div>
    </Router>
  );
}

export default Nav;