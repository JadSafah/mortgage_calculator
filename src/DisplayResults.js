import React from 'react';
import Calculator from './Calculator';

function DisplayResults(props) {

    return (
        <div>
            Mortage Payment: {Calculator(props.mortgageAmount, props.interestRate, props.paymentFrequency.value, props.amortizationYear.value, props.amortizationMonth.value, props.term.value)}
        </div>
    )
}

export default DisplayResults;