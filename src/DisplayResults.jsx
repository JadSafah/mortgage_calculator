import React from 'react';
import Calculator from './Calculator';

function DisplayResults(props) {

    //if there is an error in one of the input fields, display "Invalid fields" or else display the calculated value
    return (
        <div className="display">
            {props.mortgageAmountError || props.interestRateError ?
                <div>
                    <h3>Mortage Payment:</h3>
                    <p className="error">Invalid field</p>
                </div> :
                <div>
                    <h3>Mortage Payment:</h3>
                    <p>${Calculator(props.mortgageAmount, props.interestRate, props.paymentFrequency.value, props.amortizationYear.value, props.amortizationMonth.value, props.term.value)}</p>
                </div>
            }
        </div>
    )
}

export default DisplayResults;