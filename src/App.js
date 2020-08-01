import React from 'react';
import './App.css';
import Dropdown from './Dropdown';
import InputForm from './InputForm';
import Calculator from './Calculator';
import DisplayResults from './DisplayResults';

const amortizationPeriodYears = [
  {id:1,text:"1 Year",value:1},
  {id:2,text:"2 Years",value:2},
  {id:3,text:"3 Years",value:3},
  {id:4,text:"4 Years",value:4},
  {id:5,text:"5 Years",value:5},
  {id:6,text:"6 Years",value:6},
  {id:7,text:"7 Years",value:7},
  {id:8,text:"8 Years",value:8},
  {id:9,text:"9 Years",value:9},
  {id:10,text:"10 Years",value:10},
  {id:11,text:"11 Years",value:11},
  {id:12,text:"12 Years",value:12},
  {id:13,text:"13 Years",value:13},
  {id:14,text:"14 Years",value:14},
  {id:15,text:"15 Years",value:15},
  {id:16,text:"16 Years",value:16},
  {id:17,text:"17 Years",value:17},
  {id:18,text:"18 Years",value:18},
  {id:19,text:"19 Years",value:19},
  {id:20,text:"20 Years",value:20},
  {id:21,text:"21 Years",value:21},
  {id:22,text:"22 Years",value:22},
  {id:23,text:"23 Years",value:23},
  {id:24,text:"24 Years",value:24},
  {id:25,text:"25 Years",value:25},
];

const amortizationPeriodMonths = [
  {id:1,text:"1 Month",value:1},
  {id:2,text:"2 Months",value:2},
  {id:3,text:"3 Months",value:3},
  {id:4,text:"4 Months",value:4},
  {id:5,text:"5 Months",value:5},
  {id:6,text:"6 Months",value:6},
  {id:7,text:"7 Months",value:7},
  {id:8,text:"8 Months",value:8},
  {id:9,text:"9 Months",value:9},
  {id:10,text:"10 Months",value:10},
  {id:11,text:"11 Months",value:11}
];

const paymentFrequency = [
  {id:1,text:"Accelerated Weekly",value:52},
  {id:2,text:"Weekly",value:52},
  {id:3,text:"Accelerated Bi-weekly",value:26},
  {id:4,text:"Bi-weekly (every 2 weeks)",value:26},
  {id:5,text:"Semi-monthly (24x per year)",value:24},
  {id:6,text:"Monthly (12x per year)",value:12},
]

const term = [
  {id:1,text:"1 Year",value:1},
  {id:2,text:"2 Years",value:2},
  {id:3,text:"3 Years",value:3},
  {id:4,text:"4 Years",value:4},
  {id:5,text:"5 Years",value:5},
  {id:6,text:"6 Years",value:6},
  {id:7,text:"7 Years",value:7},
  {id:8,text:"8 Years",value:8},
  {id:9,text:"9 Years",value:9},
  {id:10,text:"10 Years",value:10}
]

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mortgageAmount: 100000,
      interestRate: 5,
      amortizationYear: 25,
      amortizationMonth: 0,
      paymentFrequency: 12,
      term: 5,
      prepaymentAmount: 0,
      prepaymentFrequency: 0,
      startWithPayment: 0,
      mortgagePayment: 0
    };
  }

  calculateMortage = () => {
    const mp = Calculator(this.state.mortgageAmount, this.state.interestRate, this.state.paymentFrequency, this.state.amortizationYear, this.state.amortizationMonth, this.state.term);
    this.setState({mortgagePayment: mp});
    /*
    const rate = (this.state.interestRate/100)/this.state.paymentFrequency;
    const numberOfPayments = (this.state.amortizationYear+(this.state.amortizationMonth/12))*this.state.paymentFrequency;
    const mortgagePayment = (this.state.mortgageAmount)*(((rate)*Math.pow((1+rate),(numberOfPayments)))/((Math.pow((1+rate),(numberOfPayments)))-1));
    console.log(mortgagePayment);
    */
    
  }
 
  handleSelectionClick = (item, type) => this.setState({[type]:item.value});

  handleChange = (type, event) => {
    this.setState({[type]: event.target.value});
  }
  
  checkState = () => console.log(this.state);

  render() {
    return (
      <div className="App">
        <h1>Mortage Calculator</h1>
          <h2>Payment Plan</h2>
          <button onClick={this.checkState()}>Check State</button>
          <InputForm title="Mortgage Amount" type="mortgageAmount" handleChange={this.handleChange} />
          <InputForm title="Interest Rate" type="interestRate" handleChange={this.handleChange} />
          <Dropdown title="Amortization Years" items={amortizationPeriodYears} type="amortizationYear" handleSelectionClick={this.handleSelectionClick} />
          <Dropdown title="Amortization Months" items={amortizationPeriodMonths} type="amortizationMonth" handleSelectionClick={this.handleSelectionClick} />
          <Dropdown title="Payment Frequency" items={paymentFrequency} type="paymentFrequency" handleSelectionClick={this.handleSelectionClick} />
          <Dropdown title="Term" items={term} type="term" handleSelectionClick={this.handleSelectionClick} />
          <button onClick={this.calculateMortage}>Calculate</button>
          <DisplayResults mortgagePayment={this.state.mortgagePayment} />

      </div>
      
    )
  }
}

export default App;
