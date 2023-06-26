import React from 'react';

function CreditsDisplay({ credits }) {
  return (
    <div>
      <h3>Credits Display:</h3>
      <ul>
        {credits.map((credit) => (
          <div key={credit.id}>
            <p>Description: {credit.description}</p>
            <p>Amount: {credit.amount}</p>
            <p>Date: {credit.date}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default CreditsDisplay;