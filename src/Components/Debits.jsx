import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DebitsDisplay from './DebitsDisplay';

function Debits() {
  const [debits, setDebits] = useState([]);
  const [debitDescription, setDebitDescription] = useState('');
  const [debitAmount, setDebitAmount] = useState('');

  useEffect(() => {
    fetchDebits();
  }, []);

  const fetchDebits = async () => {
    try {
      const response = await axios.get(
        `https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits`
      );
      setDebits(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addDebit = async () => {
    try {
      const newDebit = {
        description: debitDescription,
        amount: Number(debitAmount),
        date: new Date().toISOString().split('T')[0],
      };

      await axios.post(
        `https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits`,
        newDebit
      );

      setDebitDescription('');
      setDebitAmount('');

      fetchDebits(); // Refresh debits after adding a new one
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Debits</h2>

      <label>
        Description:
        <input
          type="text"
          value={debitDescription}
          onChange={(e) => setDebitDescription(e.target.value)}
        />
      </label>

      <label>
        Amount:
        <input
          type="number"
          value={debitAmount}
          onChange={(e) => setDebitAmount(e.target.value)}
        />
      </label>

      <button onClick={addDebit}>Add Debit</button>

      {Array.isArray(debits) ? (
        <DebitsDisplay debits={debits} />
      ) : (
        <p>No debits found.</p>
      )}
    </div>
  );
}

export default Debits;
