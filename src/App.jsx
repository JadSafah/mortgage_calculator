import React from 'react';
import './App.css';
import Dropdown from './Dropdown';
import InputForm from './InputForm';
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
  {id:0,text:"0 Month",value:0},
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
      mortgageAmountError: false,
      interestRate: 5,
      interestRateError: false,
      amortizationYear: {id:25,text:"25 Years",value:25},
      amortizationMonth: {id:0,text:"0 Month",value:0},
      paymentFrequency: {id:6,text:"Monthly (12x per year)",value:12},
      term: {id:5,text:"5 Years",value:5},
      prepaymentAmount: 0,
      prepaymentFrequency: 0,
      startWithPayment: 0,
      mortgagePayment: 0
    };
  }
 
  handleSelectionClick = (item, type) => this.setState({[type]:item});

  handleChange = (type, event) => {

    switch(type+"Error") {
      case "mortgageAmountError":

        if(event.target.value < 1000000 && event.target.value > 0) {
          this.setState({[type+"Error"]: false})
        } else {
          this.setState({[type+"Error"]: true})
        }
        this.setState({[type]: event.target.value});
        console.log(this.state)
        break;
    
      case "interestRateError":

        if(event.target.value < 50 && event.target.value > 0) {
          this.setState({[type+"Error"]: false})
        } else {
          this.setState({[type+"Error"]: true})
        }
        this.setState({[type]: event.target.value});
        console.log(this.state)
        break;
      
      default:
        break;

    
  }
}

  render() {
    return (
      <div className="App">
        <h1>Mortgage Calculator</h1>
          <div className="paymentPlan">
            <h2>Payment Plan</h2>
            <InputForm title="Mortgage Amount ($)" error={this.state.mortgageAmountError} state={this.state.mortgageAmount} type="mortgageAmount" handleChange={this.handleChange} />
            <InputForm title="Interest Rate (%)" error={this.state.interestRateError} state={this.state.interestRate} type="interestRate" handleChange={this.handleChange} />
            <Dropdown title="Amortization Years" state={this.state.amortizationYear} items={amortizationPeriodYears} type="amortizationYear" handleSelectionClick={this.handleSelectionClick} />
            <Dropdown title="Amortization Months" state={this.state.amortizationMonth} items={amortizationPeriodMonths} type="amortizationMonth" handleSelectionClick={this.handleSelectionClick} />
            <Dropdown title="Payment Frequency" state={this.state.paymentFrequency} items={paymentFrequency} type="paymentFrequency" handleSelectionClick={this.handleSelectionClick} />
            <Dropdown title="Term" state={this.state.term} items={term} type="term" handleSelectionClick={this.handleSelectionClick} />
            <DisplayResults mortgageAmount={this.state.mortgageAmount} mortgageAmountError={this.state.mortgageAmountError} interestRate={this.state.interestRate} interestRateError={this.state.interestRateError} paymentFrequency={this.state.paymentFrequency} amortizationYear={this.state.amortizationYear} amortizationMonth={this.state.amortizationMonth} term={this.state.term} />
          </div>
      </div>
    )
  }
}

export default App;
