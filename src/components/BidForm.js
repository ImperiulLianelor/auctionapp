// BidForm.js
import React, { useState } from 'react';

const BidForm = ({ onBidSubmit }) => {
  const [bidAmount, setBidAmount] = useState('');

  const handleBidChange = (e) => {
    setBidAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate bidAmount if needed

    // Pass the bidAmount to the parent component for handling the bid submission
    onBidSubmit(bidAmount);

    // Clear the input field after submitting the bid
    setBidAmount('');
  };

  return (
    <div className="bid-form">
      <h3>Place Your Bid</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter bid amount"
          value={bidAmount}
          onChange={handleBidChange}
        />
        <button type="submit">Bid Now</button>
      </form>
    </div>
  );
};

export default BidForm;
