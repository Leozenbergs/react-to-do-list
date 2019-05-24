import React from 'react';

const Nav = () => {
    
    return (
        <div className="side_nav c-pointer" id="nav" key="1">
            
            <div id="menu">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>

            <ul>
                <li><a href="">Recent</a></li>
                <li><a href="">Lists</a></li>
                <li><a href="">Favorites</a></li>
            </ul>
            
        </div>
    );
}
export default Nav;