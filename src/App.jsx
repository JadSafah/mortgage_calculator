import React from 'react';
import './App.css';
import Dropdown from './Dropdown';
import InputForm from './InputForm';
import DisplayResults from './DisplayResults';
import * as Constants from './Constants';

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
 
  //handle selected element from dropdown list
  handleSelectionClick = (item, type) => this.setState({[type]:item});

  //handle change from input form
  handleChange = (type, event) => {

    //if the mortgage amount is not in the specified range, set mortgageAmountError to true
    switch(type+"Error") {
      case "mortgageAmountError":

        if(event.target.value < 1000000 && event.target.value > 0) {
          this.setState({[type+"Error"]: false})
        } else {
          this.setState({[type+"Error"]: true})
        }
        this.setState({[type]: event.target.value});
        break;
    
      //if the interest rate is not in the specified range, set interestRateError to true
      case "interestRateError":

        if(event.target.value < 50 && event.target.value > 0) {
          this.setState({[type+"Error"]: false})
        } else {
          this.setState({[type+"Error"]: true})
        }
        this.setState({[type]: event.target.value});
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
            <Dropdown title="Amortization Years" state={this.state.amortizationYear} items={Constants.amortizationPeriodYears} type="amortizationYear" handleSelectionClick={this.handleSelectionClick} />
            <Dropdown title="Amortization Months" state={this.state.amortizationMonth} items={Constants.amortizationPeriodMonths} type="amortizationMonth" handleSelectionClick={this.handleSelectionClick} />
            <Dropdown title="Payment Frequency" state={this.state.paymentFrequency} items={Constants.paymentFrequency} type="paymentFrequency" handleSelectionClick={this.handleSelectionClick} />
            <Dropdown title="Term" state={this.state.term} items={Constants.term} type="term" handleSelectionClick={this.handleSelectionClick} />
            <DisplayResults mortgageAmount={this.state.mortgageAmount} mortgageAmountError={this.state.mortgageAmountError} interestRate={this.state.interestRate} interestRateError={this.state.interestRateError} paymentFrequency={this.state.paymentFrequency} amortizationYear={this.state.amortizationYear} amortizationMonth={this.state.amortizationMonth} term={this.state.term} />
          </div>
      </div>
    )
  }
}

export default App;
