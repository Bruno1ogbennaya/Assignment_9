import React, { useState } from 'react';
import CreditsDisplay from './CreditsDisplay';

function Credits() {
  const [credits, setCredits] = useState([]); // State for storing credits data
  const [creditDescription, setCreditDescription] = useState(''); // State for credit description input
  const [creditAmount, setCreditAmount] = useState(''); // State for credit amount input

  const addCredit = () => {
    const newCredit = {
      description: creditDescription, // Creating a new credit object with the entered description
      amount: Number(creditAmount), // Converting the entered amount to a number
      date: new Date().toISOString().split('T')[0], // Generating the current date and extracting only the date part
    };

    const updatedCredits = [...credits, newCredit]; // Adding the new credit to the existing credits array
    setCredits(updatedCredits); // Updating the credits state with the new array of credits

    setCreditDescription(''); // Clearing the credit description input
    setCreditAmount(''); // Clearing the credit amount input
  };

  const handleForm = (event) => {
    event.preventDefault(); // Preventing the default form submission behavior

    addCredit(); // Calling the addCredit function to add a new credit
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



    
    
    
    
    
    
    
    
    
    
    
    /*import React, { useState, useEffect } from 'react';
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
    try {   // Making a GET request to fetch credits data from the API
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
        description: creditDescription, // Assigning the value of 'creditDescription' to the 'description' property of the new credit object
        amount: Number(creditAmount), // Converting the 'creditAmount' string to a number and assigning it to the 'amount' property of the new credit object
        date: new Date().toISOString().split('T')[0], // Creating a new Date object, converting it to an ISO string, and extracting only the date part
      };

      
      console.log('Credit added:', newCredit); // Logging the newly added credit object to the console to ensure it was read in correctly

      setCreditDescription(''); // Resetting the 'creditDescription' state to an empty string
      setCreditAmount(''); // Resetting the 'creditAmount' state to an empty string

      fetchCredits(); // Refresh credits after adding a new one
    } catch (error) {
      console.error(error); //Logs any error that occurred while adding a new credit
    }
  };

  const handleForm = (event) => {
    event.preventDefault(); // Preventing the default form submission behavior

    addCredit();  // Calling the addCredit function to add a new credit
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
        <CreditsDisplay credits={credits} /> // Rendering the CreditsDisplay component with the 'credits' data as a prop if the 'credits' array is not empty
      ) : (
        <p>No credits found.</p> // Rendering a paragraph element with the text "No credits found." if the 'credits' array is empty
      )}
    </div>
  );
}

export default Credits; // Exporting the Credits component as the default export





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
