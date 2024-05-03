//Home.js
import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';


const Home = () => {
  // Your items data with IDs and names
  const items = Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
    name: `Item ${index + 1}`,
  }));

  const getImageURL = (itemId) => {
    return `${process.env.PUBLIC_URL}/images/item${itemId}.jpg`;
  };

  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/">Home</Link>
        </div>
        <div className="navbar-right">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>
      <div className="content-wrapper">
        <div className="sidebar">
          <Link to="/" className="button">Explore</Link>
          <Link to="/" className="button">Featured Items</Link>
        </div>
        <div className="main-content">
          <h1 className="title">Welcome to the Online Auction System</h1>
          <p>Explore our latest items up for auction</p>
          <div className="item-grid">
            {items.map((item) => (
              <div className="item-box" key={item.id}>
                <img src={getImageURL(item.id)} loading="lazy" alt={item.name} />
                <h3>{item.name}</h3>
                <Link to={`/bidding/${item.id}`} className="bid-link">
                  <button>Bid</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
