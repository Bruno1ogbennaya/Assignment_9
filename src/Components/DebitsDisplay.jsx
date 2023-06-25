import React from 'react';

function DebitsDisplay({ debits }) {
  return (
    <div>
      <h3>Debits Display:</h3>
      <ul>
        {debits.map((debit) => (
          <li key={debit.id}>
            <div>Description: {debit.description}</div>
            <div>Amount: {debit.amount}</div>
            <div>Date: {debit.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DebitsDisplay;
