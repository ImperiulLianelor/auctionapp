//BiddersList.js
import React from 'react';

const BiddersList = ({ bidders }) => {
  return (
    <div className="bidders-list">
      <h3>Last Ten Bidders</h3>
      <ul>
        {bidders.map((bidder, index) => (
          <li key={index}>{`${bidder.name}: $${bidder.amount}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default BiddersList;
