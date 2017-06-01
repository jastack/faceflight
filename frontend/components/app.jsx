import React from 'react';
import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';

const App = () => (
  <div>
    <header className="header">
      <h1>FaceFlight</h1>
      <GreetingContainer />
      <SessionFormContainer />
    </header>
  </div>
);

export default App;
