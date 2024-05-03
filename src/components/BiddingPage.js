// BiddingPageTemplate.js
import React, { useState } from 'react';
import './BiddingPage.css';
import BidDetails from './BidDetails';
import BiddersList from './BiddersList';
import BidForm from './BidForm';
import { useParams } from 'react-router-dom';

const getImageURL = (itemId) => {
  return `${process.env.PUBLIC_URL}/images/item${itemId}.jpg`;
};

const BiddingPage = () => {
  const { itemId } = useParams();

  const [highestBid, setHighestBid] = useState(120); // Initial highest bid
  const [lastTenBidders, setLastTenBidders] = useState([
    { name: 'User2', amount: 120 },
    { name: 'User1', amount: 110 },
  ]);

  const remainingTime = '2 days left';

  const handleBidSubmit = (bidAmount) => {
    const newBidAmount = parseFloat(bidAmount);

    if (newBidAmount > highestBid) {
      const newBidder = {
        name: 'You', // Replace with the actual user's name
        amount: newBidAmount,
      };

      // Update the list of bidders with the new bidder
      setLastTenBidders((prevBidders) => [newBidder, ...prevBidders.slice(0, 9)]);
      
      // Update the highest bid
      setHighestBid(newBidAmount);
    } else {
      alert('Bid amount must be greater than the current highest bid.');
    }
  };

  return (
    <div className="bidding-page">
      <div className="left-section">
        <img src={getImageURL(itemId)} width="85%" height="85%" alt={`Item ${itemId}`} />
        <BidDetails currentBid={highestBid} remainingTime={remainingTime} />
      </div>
      <div className="right-section">
        <BiddersList bidders={lastTenBidders} />
        <BidForm onBidSubmit={handleBidSubmit} />
      </div>
    </div>
  );
};

export default BiddingPage;
