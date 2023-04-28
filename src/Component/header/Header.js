import React from "react";
import "./header.css";
import logo from "../../assest/images/logo.png";
export default function Header() {
  return (
    <div>
      <div className="header-dflex">
        <img src={logo} id="imdb_logo" alt="logo" />

        <div className="menu-container">
          <div className="hamburgar-menu">
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className="menu-name">Menu</div>
        </div>
        <div className="search-container">
          <div className="search-dropdown">All <i className="fa-sharp fa-solid fa-angle-down  search-carrot"></i> </div>
          <input type="search" className="search" placeholder="Search IMDb"></input>
        </div>
        <div className="imdb_pro">
          <div id="imdb-name">IMDb</div>
          <div id="pro">Pro</div>
        </div>
        <div className="v-line"></div>
        <div className="watchlist-container-header">
          <i className="fa-solid fa-bookmark fa-xl" id="bookmark-logo"></i>
          <div className="watchlist-name">Watchlist</div>
        </div>
        <div className="sign-btn">Sign In</div>
        <div className="lang-dropdown">
          En <i className="fa-sharp fa-solid fa-angle-down fa-beat-fade carrot"></i>
        </div>
      </div>
    </div>
  );
}
