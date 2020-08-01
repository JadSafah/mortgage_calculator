import React from 'react';
import './App.css';
import Dropdown from './Dropdown';

const amortizationPeriodYears = [
  {id:1,value:"1 Year"},
  {id:2,value:"2 Years"},
  {id:3,value:"3 Years"},
  {id:4,value:"4 Years"},
  {id:5,value:"5 Years"},
  {id:6,value:"6 Years"},
  {id:7,value:"7 Years"},
  {id:8,value:"8 Years"},
  {id:9,value:"9 Years"},
  {id:10,value:"10 Years"},
  {id:11,value:"11 Years"},
  {id:12,value:"12 Years"},
  {id:13,value:"13 Years"},
  {id:14,value:"14 Years"},
  {id:15,value:"15 Years"},
  {id:16,value:"16 Years"},
  {id:17,value:"17 Years"},
  {id:18,value:"18 Years"},
  {id:19,value:"19 Years"},
  {id:20,value:"20 Years"},
  {id:21,value:"21 Years"},
  {id:22,value:"22 Years"},
  {id:23,value:"23 Years"},
  {id:24,value:"24 Years"},
  {id:25,value:"25 Years"},
];

const amortizationPeriodMonths = [
  {id:1,value:"1 Month"},
  {id:2,value:"2 Months"},
  {id:3,value:"3 Months"},
  {id:4,value:"4 Months"},
  {id:5,value:"5 Months"},
  {id:6,value:"6 Months"},
  {id:7,value:"7 Months"},
  {id:8,value:"8 Months"},
  {id:9,value:"9 Months"},
  {id:10,value:"10 Months"},
  {id:11,value:"11 Months"}
];

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
          <Dropdown items={amortizationPeriodYears} />
          <Dropdown items={amortizationPeriodMonths} />
      </div>
      
    )
  }
}

export default App;
