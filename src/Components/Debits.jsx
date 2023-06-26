  
import React, { useState } from 'react';
import DebitsDisplay from './DebitsDisplay'; // Importing the DebitsDisplay component

function Debits() {
  const [debits, setDebits] = useState([]); // State variable to store the debits array
  const [debitDescription, setDebitDescription] = useState(''); // State variable to store the debit description
  const [debitAmount, setDebitAmount] = useState(''); // State variable to store the debit amount

  const addDebit = () => {
    const newDebit = {
      description: debitDescription, // Assigning the value of 'debitDescription' to the 'description' property of the new debit object
      amount: Number(debitAmount), // Converting the 'debitAmount' string to a number and assigning it to the 'amount' property of the new debit object
      date: new Date().toISOString().split('T')[0], // Creating a new Date object, converting it to an ISO string, and extracting only the date part
    };

    const updatedDebits = [...debits, newDebit]; // Creating a new array by spreading the existing 'debits' array and adding the new debit object
    setDebits(updatedDebits); // Updating the 'debits' state with the updated array of debits

    setDebitDescription(''); // Resetting the 'debitDescription' state to an empty string
    setDebitAmount(''); // Resetting the 'debitAmount' state to an empty string
  };

  return (
    <div>
      <h2>Debits</h2>

      <label>
        Description:
        <input
          type="text"
          value={debitDescription} // Binding the value of the input field to the 'debitDescription' state
          onChange={(e) => setDebitDescription(e.target.value)} // Updating the 'debitDescription' state with the new value entered in the input field
        />
      </label>

      <label>
        Amount:
        <input
          type="number"
          value={debitAmount} // Binding the value of the input field to the 'debitAmount' state
          onChange={(e) => setDebitAmount(e.target.value)} // Updating the 'debitAmount' state with the new value entered in the input field
        />
      </label>

      <button onClick={addDebit}>Add Debit</button> 

      {Array.isArray(debits) ? (
        <DebitsDisplay debits={debits} /> // Rendering the DebitsDisplay component with the 'debits' data as a prop if the 'debits' array is not empty
        ) : (
        <p>No debits found.</p> // Rendering a paragraph element with the text "No debits found." if the 'debits' array is empty
      )}
    </div>
  );
}

export default Debits; // Exporting the Debits component as the default export

  
  
  
  
  
  
  
  
/*  import React, { useState, useEffect } from 'react';
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
      console.log('Fetched debits:', response.data.debits);
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

      console.log('Add debits:', newDebit);

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

export default Debits; */