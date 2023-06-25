import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreditsDisplay from './CreditsDisplay';

function Credits() {
  const [credits, setCredits] = useState([]);
  const [creditDescription, setCreditDescription] = useState('');
  const [creditAmount, setCreditAmount] = useState('');

  useEffect(() => {
    fetchCredits();
  }, []);

  const fetchCredits = async () => {
    try {
      const response = await axios.get('https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/credits');
      setCredits(response.data);
      console.log('Fetched credits:', response.data.credits);
    } catch (error) {
      console.error(error);
    }
  };

  const addCredit = async () => {
    try {
      const newCredit = {
        description: creditDescription,
        amount: Number(creditAmount),
        date: new Date().toISOString().split('/')[0],
      };

      await axios.post(
        'https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/credits',
        newCredit
      );
      
      console.log('Credit added:', newCredit);

      setCreditDescription('');
      setCreditAmount('');

      fetchCredits(); // Refresh credits after adding a new one
    } catch (error) {
      console.error(error);
    }
  };

  const handleForm = (event) => {
    event.preventDefault();

    addCredit();
  };

  return (
    <div>
      <h2>Credits</h2>

      <form onSubmit={handleForm}>
        <label>
          Description:
          <input
            type="text"
            value={creditDescription}
            onChange={(e) => setCreditDescription(e.target.value)}
          />
        </label>

        <label>
          Amount:
          <input
            type="number"
            value={creditAmount}
            onChange={(e) => setCreditAmount(e.target.value)}
          />
        </label>

        <button type="submit">Add Credit</button>

      </form>

      {Array.isArray(credits) && credits.length > 0 ? (
        <CreditsDisplay credits={credits} /> 
      ) : (
        <p>No credits found.</p>
      )}
    </div>
  );
}

export default Credits;




 /* import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreditsDisplay from './CreditsDisplay';


        <button type="submit">Add Credit</button> {/* Change button type to "submit" 

function Credits() {
  const [credits, setCredits] = useState([]);
  const [creditDescription, setCreditDescription] = useState('');
  const [creditAmount, setCreditAmount] = useState('');

  useEffect(() => {
    fetchCredits();
  }, []);

  const fetchCredits = async () => {
    try {
      const response = await axios.get(
        'https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/credits'
      );
      setCredits(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addCredit = async () => {
    try {
      const newCredit = {
        description: creditDescription,
        amount: Number(creditAmount),
        date: new Date().toISOString().split('T')[0],
      };

      await axios.post(
        'https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/credits',
        newCredit
      );

      setCreditDescription('');
      setCreditAmount('');

      fetchCredits(); // Refresh credits after adding a new one
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Credits</h2>

      <label>
        Description:
        <input
          type="text"
          value={creditDescription}
          onChange={(e) => setCreditDescription(e.target.value)}
        />
      </label>

      <label>
        Amount:
        <input
          type="number"
          value={creditAmount}
          onChange={(e) => setCreditAmount(e.target.value)}
        />
      </label>

      <button onClick={addCredit}>Add Credit</button>

      {Array.isArray(credits) ? (
        <CreditsDisplay credits={credits} />
      ) : (
        <p>No credits found.</p>
      )}
    </div>
  );
}

export default Credits; */
