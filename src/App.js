import React from 'react';
import './App.css';
import Dropdown from './Dropdown';

const fruits= [
  {
      id:1,
      value:"Apple"
  },
  {
      id:2,
      value:"Banana"
  },
  {
      id:3,
      value:"Orange"
  }];

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }
  
  render() {
    return (
      <div className="App">
        <h1>Mortage Calculator</h1>
          <h2>Payment Plan</h2>
          <Dropdown items={fruits}/>
      </div>
      
    )
  }
}

export default App;
