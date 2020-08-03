//function that calculates the mortgage
function Calculator(mortgageAmount, interestRate, paymentFrequency, amortizationYear, amortizationMonth, term) {
    const r = (interestRate/100)/paymentFrequency;
    const n = (amortizationYear+(amortizationMonth/12))*paymentFrequency;
    const numerator = (r)*(Math.pow(1+r,n));
    const denominator = (Math.pow(1+r,n))-1;
    const mortgagePayment = (mortgageAmount)*(numerator/denominator);
    return Math.round((mortgagePayment + Number.EPSILON) * 100) / 100;
  }

  export default Calculator;