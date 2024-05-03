//BidDetails.js
import React from 'react';

const BidDetails = ({ currentBid, remainingTime }) => {
  return (
    <div className="bid-details">
      <div className="current-bid">{`Current Bid: $${currentBid}`}</div>
      <div className="remaining-time">{`Remaining Time: ${remainingTime}`}</div>
      {/* Additional details */}
    </div>
  );
};

export default BidDetails;
