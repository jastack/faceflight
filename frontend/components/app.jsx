import React from 'react';
import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <header className="header">
          <SessionFormContainer />
        </header>
      </div>
    );
  }
}

export default App;
