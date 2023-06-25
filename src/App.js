import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Debits from './Components/Debits';
import Credits from './Components/Credits';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Debits">Debits</Link>
            </li>
            <li>
              <Link to="/Credits">Credits</Link>
            </li>
          </ul>
        </nav>

        <Routes>
        <Route path="/Home" exact element={<Home />} />
        <Route path="/Debits" element={<Debits />} />
        <Route path="/Credits" element={<Credits />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
